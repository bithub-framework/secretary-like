import { Side } from './length-action-side';
import { HLike, H, HFactory } from './h';
import { TradeId } from './trade-id';


export interface Trade<H extends HLike<H>> {
	side: Side;
	price: H;
	quantity: H;
	time: number;
	id: TradeId;
}

export namespace Trade {
	export interface Snapshot {
		readonly side: Side;
		readonly price: H.Snapshot;
		readonly quantity: H.Snapshot;
		readonly time: number;
		readonly id: TradeId;
	}
}

export class TradeFactory<H extends HLike<H>> {
	public constructor(
		private hFactory: HFactory<H>,
	) { }

	public captureTrade(trade: Trade<H>): Trade.Snapshot {
		return {
			side: trade.side,
			price: this.hFactory.capture(trade.price),
			quantity: this.hFactory.capture(trade.quantity),
			time: trade.time,
			id: trade.id,
		}
	}

	public restoreTrade(snapshot: Trade.Snapshot): Trade<H> {
		return {
			side: snapshot.side,
			price: this.hFactory.restore(snapshot.price),
			quantity: this.hFactory.restore(snapshot.quantity),
			time: snapshot.time,
			id: snapshot.id,
		}
	}

	public copyTrade(trade: Trade<H>): Trade<H> {
		return {
			side: trade.side,
			price: trade.price,
			quantity: trade.quantity,
			time: trade.time,
			id: trade.id,
		}
	}
}
