import { HLike, H } from './h';
import { LimitOrder, LimitOrderStatic } from './limit-order';
import { OrderId } from './order-id';


export interface OpenOrder<H extends HLike<H>> extends LimitOrder<H> {
	filled: H;
	unfilled: H;
	id: OrderId;
}

export namespace OpenOrder {
	export interface Snapshot extends LimitOrder.Snapshot {
		readonly filled: H.Snapshot;
		readonly unfilled: H.Snapshot;
		readonly id: OrderId;
	}
}

export class OpenOrderStatic<H extends HLike<H>> extends LimitOrderStatic<H>{
	public captureOpenOrder(order: OpenOrder<H>): OpenOrder.Snapshot {
		return {
			...this.captureLimitOrder(order),
			filled: this.H.capture(order.filled),
			unfilled: this.H.capture(order.unfilled),
			id: order.id,
		}
	}

	public restoreOpenOrder(snapshot: OpenOrder.Snapshot): OpenOrder<H> {
		return {
			...this.restoreLimitOrder(snapshot),
			filled: this.H.restore(snapshot.filled),
			unfilled: this.H.restore(snapshot.unfilled),
			id: snapshot.id,
		};
	}

	public copyOpenOrder(order: OpenOrder<H>): OpenOrder<H> {
		return {
			...this.copyLimitOrder(order),
			filled: order.filled,
			unfilled: order.unfilled,
			id: order.id,
		}
	}
}
