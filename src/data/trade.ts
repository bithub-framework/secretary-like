import { Side } from './length-action-side';
import { HLike, H, HStatic } from './h';
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

export class TradeStatic<H extends HLike<H>> {
	public constructor(
		private H: HStatic<H>,
	) { }

	public capture(trade: Trade<H>): Trade.Snapshot {
		return {
			side: trade.side,
			price: this.H.capture(trade.price),
			quantity: this.H.capture(trade.quantity),
			time: trade.time,
			id: trade.id,
		}
	}

	public restore(snapshot: Trade.Snapshot): Trade<H> {
		return {
			side: snapshot.side,
			price: this.H.restore(snapshot.price),
			quantity: this.H.restore(snapshot.quantity),
			time: snapshot.time,
			id: snapshot.id,
		}
	}

	public copy(trade: Trade<H>): Trade<H> {
		return {
			side: trade.side,
			price: trade.price,
			quantity: trade.quantity,
			time: trade.time,
			id: trade.id,
		}
	}
}
