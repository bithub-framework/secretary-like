import { HLike, H, HStatic } from './h';
import { LimitOrder, LimitOrderStatic } from './limit-order';
import { OrderId, OrderIdStatic } from './order-id';


export interface OpenOrder<H extends HLike<H>, OrderId>
	extends LimitOrder<H> {

	filled: H;
	unfilled: H;
	id: OrderId;
}

export namespace OpenOrder {
	export interface Snapshot extends LimitOrder.Snapshot {
		readonly filled: H.Snapshot;
		readonly unfilled: H.Snapshot;
		readonly id: OrderId.Snapshot
	}
}

export class OpenOrderStatic<H extends HLike<H>, OrderId> {
	private LimitOrder = new LimitOrderStatic<H>(this.H);

	public constructor(
		private H: HStatic<H>,
		private OrderId: OrderIdStatic<OrderId>,
	) { }

	public capture(order: OpenOrder<H, OrderId>): OpenOrder.Snapshot {
		return {
			...this.LimitOrder.capture(order),
			filled: this.H.capture(order.filled),
			unfilled: this.H.capture(order.unfilled),
			id: this.OrderId.capture(order.id),
		}
	}

	public restore(snapshot: OpenOrder.Snapshot): OpenOrder<H, OrderId> {
		return {
			...this.LimitOrder.restore(snapshot),
			filled: this.H.restore(snapshot.filled),
			unfilled: this.H.restore(snapshot.unfilled),
			id: this.OrderId.restore(snapshot.id),
		};
	}

	public copy(order: OpenOrder<H, OrderId>): OpenOrder<H, OrderId> {
		return {
			...this.LimitOrder.copy(order),
			filled: order.filled,
			unfilled: order.unfilled,
			id: order.id,
		}
	}
}
