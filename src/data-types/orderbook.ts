import {
	BookOrder,
	BookOrderFactory,
	BookOrderLike,
} from './book-order';
import { HLike } from './h';
import { Side } from './length-action-side';


export interface OrderbookLike<H extends HLike<H>> extends Orderbook.Source<H> {
	[side: Side]: BookOrderLike<H>[];
	time: number;
	toJSON(): unknown;
	toString(): string;
}

class Orderbook<H extends HLike<H>> implements OrderbookLike<H>{
	[side: Side]: BookOrderLike<H>[];
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

export class OrderbookFactory<H extends HLike<H>> {
	public constructor(
		private bookOrderFactory: BookOrderFactory<H>,
	) { }

	public new(source: Orderbook.Source<H>): Orderbook<H> {
		return new Orderbook(
			source,
			this,
			this.bookOrderFactory,
		);
	}

	public capture(orderbook: OrderbookLike<H>): Orderbook.Snapshot {
		return {
			bids: orderbook[Side.BID].map(order => this.bookOrderFactory.capture(order)),
			asks: orderbook[Side.ASK].map(order => this.bookOrderFactory.capture(order)),
			time: Number.isFinite(orderbook.time)
				? orderbook.time
				: null,
		};
	}

	public restore(snapshot: Orderbook.Snapshot): Orderbook<H> {
		return this.new({
			[Side.BID]: snapshot.bids.map(orderSnapshot => this.bookOrderFactory.restore(orderSnapshot)),
			[Side.ASK]: snapshot.asks.map(orderSnapshot => this.bookOrderFactory.restore(orderSnapshot)),
			time: snapshot.time !== null
				? snapshot.time
				: Number.NEGATIVE_INFINITY,
		});
	}
}
