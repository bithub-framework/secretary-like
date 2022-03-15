import { HLike, H, HStatic } from './h';
import { LimitOrder, LimitOrderStatic } from './limit-order';
import { OrderId, OrderIdStatic } from './order-id';



export interface OpenOrder<H extends HLike<H>, OrderId>
	extends LimitOrder<H> {

	readonly filled: H;
	readonly unfilled: H;
	readonly id: OrderId;
}

export namespace OpenOrder {
	export interface MutablePlain<H extends HLike<H>, OrderId>
		extends LimitOrder.MutablePlain<H> {
		filled: H;
		unfilled: H;
		id: OrderId;
	}

	export interface Snapshot extends LimitOrder.Snapshot {
		readonly filled: H.Snapshot;
		readonly unfilled: H.Snapshot;
		readonly id: OrderId.Snapshot
	}
}

export class OpenOrderStatic<H extends HLike<H>, OrderId> {
	private readonly LimitOrder = new LimitOrderStatic<H>(this.H);

	public constructor(
		private readonly H: HStatic<H>,
		private readonly OrderId: OrderIdStatic<OrderId>,
	) { }

	public capture(order: OpenOrder<H, OrderId>): OpenOrder.Snapshot {
		return {
			...this.LimitOrder.capture(order),
			filled: this.H.capture(order.filled),
			unfilled: this.H.capture(order.unfilled),
			id: this.OrderId.capture(order.id),
		}
	}

	public restore(
		snapshot: OpenOrder.Snapshot,
	): OpenOrder.MutablePlain<H, OrderId> {
		return {
			...this.LimitOrder.restore(snapshot),
			filled: this.H.restore(snapshot.filled),
			unfilled: this.H.restore(snapshot.unfilled),
			id: this.OrderId.restore(snapshot.id),
		};
	}
}
