import { Side } from './length-action-side';
import { HLike, H, HFactory } from './h';
import { TradeId } from './trade-id';
import { CompositeDataLike, CompositeDataFactoryLike } from './composite-data';


export interface TradeLike<H extends HLike<H>>
	extends Trade.Source<H>, CompositeDataLike {
	side: Side;
	price: H;
	quantity: H;
	time: number;
	id: TradeId;
	toJSON(): unknown;
	toString(): string;
}

class Trade<H extends HLike<H>> implements TradeLike<H> {
	public side: Side;
	public price: H;
	public quantity: H;
	public time: number;
	public id: TradeId;

	public constructor(
		source: Trade.Source<H>,
		private factory: TradeFactory<H>,
	) {
		({
			side: this.side,
			price: this.price,
			quantity: this.quantity,
			time: this.time,
			id: this.id,
		} = source);
	}

	public toJSON(): unknown {
		return this.factory.capture(this);
	}

	public toString(): string {
		return JSON.stringify(this.toJSON());
	}
}

export namespace Trade {
	export interface Source<H extends HLike<H>> {
		side: Side;
		price: H;
		quantity: H;
		time: number;
		id: TradeId;
	}

	export interface Snapshot {
		readonly side: Side;
		readonly price: H.Snapshot;
		readonly quantity: H.Snapshot;
		readonly time: number;
		readonly id: TradeId;
	}
}

export class TradeFactory<H extends HLike<H>> implements
	CompositeDataFactoryLike<
	Trade.Source<H>,
	TradeLike<H>,
	Trade.Snapshot>
{
	public constructor(
		private hFactory: HFactory<H>,
	) { }

	public new(source: Trade.Source<H>): Trade<H> {
		return new Trade(source, this);
	}

	public capture(trade: TradeLike<H>): Trade.Snapshot {
		return {
			side: trade.side,
			price: this.hFactory.capture(trade.price),
			quantity: this.hFactory.capture(trade.quantity),
			time: trade.time,
			id: trade.id,
		}
	}

	public restore(snapshot: Trade.Snapshot): Trade<H> {
		return this.new({
			side: snapshot.side,
			price: this.hFactory.restore(snapshot.price),
			quantity: this.hFactory.restore(snapshot.quantity),
			time: snapshot.time,
			id: snapshot.id,
		});
	}
}
