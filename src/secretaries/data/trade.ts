import { Side } from './side';
import { HLike, H, HStatic } from './h';
import { TradeId, TradeIdStatic } from './trade-id';


export interface Trade<H extends HLike<H>, TradeId> {
	side: Side;
	price: H;
	quantity: H;
	time: number;
	id: TradeId;
}

export namespace Trade {
	export interface Functional<H extends HLike<H>, TradeId> {
		readonly side: Side;
		readonly price: H;
		readonly quantity: H;
		readonly time: number;
		readonly id: TradeId;
	}

	export interface Snapshot {
		readonly side: Side;
		readonly price: H.Snapshot;
		readonly quantity: H.Snapshot;
		readonly time: number;
		readonly id: TradeId.Snapshot;
	}
}


export class TradeStatic<H extends HLike<H>, TradeId> {
	public constructor(
		private readonly H: HStatic<H>,
		private readonly TradeId: TradeIdStatic<TradeId>,
	) { }

	public capture(
		trade: Trade<H, TradeId> | Trade.Functional<H, TradeId>,
	): Trade.Snapshot {
		return {
			side: trade.side,
			price: this.H.capture(trade.price),
			quantity: this.H.capture(trade.quantity),
			time: trade.time,
			id: this.TradeId.capture(trade.id),
		}
	}

	public restore(
		snapshot: Trade.Snapshot,
	): Trade<H, TradeId> | Trade.Functional<H, TradeId> {
		return {
			side: snapshot.side,
			price: this.H.restore(snapshot.price),
			quantity: this.H.restore(snapshot.quantity),
			time: snapshot.time,
			id: this.TradeId.restore(snapshot.id),
		}
	}

	public copy(
		trade: Trade<H, TradeId> | Trade.Functional<H, TradeId>,
	): Trade<H, TradeId> | Trade.Functional<H, TradeId> {
		return {
			side: trade.side,
			price: trade.price,
			quantity: trade.quantity,
			time: trade.time,
			id: trade.id,
		}
	}
}
