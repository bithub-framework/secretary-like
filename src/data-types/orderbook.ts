import {
	BookOrderFactory,
	BookOrder,
} from './book-order';
import { HLike } from './h';
import { Side } from './length-action-side';
import { CompositeDataLike, CompositeDataFactoryLike } from './composite-data';


export interface Orderbook<H extends HLike<H>>
	extends Orderbook.Source<H>, CompositeDataLike {
	[side: Side]: BookOrder<H>[];
	time: number;
	toJSON(): unknown;
	toString(): string;
}

class ConcreteOrderbook<H extends HLike<H>> implements Orderbook<H>{
	[side: Side]: BookOrder<H>[];
	public time: number;

	public constructor(
		source: Orderbook.Source<H>,
		private factory: OrderbookFactory<H>,
		bookOrderFactory: BookOrderFactory<H>,
	) {
		for (const side of [Side.BID, Side.ASK])
			this[side] = source[side].map(
				order => bookOrderFactory.new(order),
			);
		this.time = source.time;
	}

	public toJSON(): unknown {
		return this.factory.capture(this);
	}

	public toString(): string {
		return JSON.stringify(this.toJSON());
	}
}

export namespace Orderbook {
	export interface Source<H extends HLike<H>> {
		[side: Side]: BookOrder.Source<H>[];
		time: number;
	}

	export interface Snapshot {
		readonly bids: readonly BookOrder.Snapshot[];
		readonly asks: readonly BookOrder.Snapshot[];
		readonly time: number | null;
	}
}

export class OrderbookFactory<H extends HLike<H>> implements
	CompositeDataFactoryLike<
	Orderbook.Source<H>,
	Orderbook<H>,
	Orderbook.Snapshot>
{
	public constructor(
		private bookOrderFactory: BookOrderFactory<H>,
	) { }

	public new(source: Orderbook.Source<H>): ConcreteOrderbook<H> {
		return new ConcreteOrderbook(
			source,
			this,
			this.bookOrderFactory,
		);
	}

	public capture(orderbook: Orderbook<H>): Orderbook.Snapshot {
		return {
			bids: orderbook[Side.BID].map(order => this.bookOrderFactory.capture(order)),
			asks: orderbook[Side.ASK].map(order => this.bookOrderFactory.capture(order)),
			time: Number.isFinite(orderbook.time)
				? orderbook.time
				: null,
		};
	}

	public restore(snapshot: Orderbook.Snapshot): ConcreteOrderbook<H> {
		return this.new({
			[Side.BID]: snapshot.bids.map(orderSnapshot => this.bookOrderFactory.restore(orderSnapshot)),
			[Side.ASK]: snapshot.asks.map(orderSnapshot => this.bookOrderFactory.restore(orderSnapshot)),
			time: snapshot.time !== null
				? snapshot.time
				: Number.NEGATIVE_INFINITY,
		});
	}
}
