import { HLike, H, HStatic } from './h';
import { LimitOrder, LimitOrderStatic } from './limit-order';
import { OrderId } from './order-id';


export interface OpenOrder<H extends HLike<H>>
	extends LimitOrder<H> {

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

export class OpenOrderStatic<H extends HLike<H>> {
	private LimitOrder = new LimitOrderStatic<H>(this.H);

	public constructor(
		private H: HStatic<H>,
	) { }

	public capture(order: OpenOrder<H>): OpenOrder.Snapshot {
		return {
			...this.LimitOrder.capture(order),
			filled: this.H.capture(order.filled),
			unfilled: this.H.capture(order.unfilled),
			id: order.id,
		}
	}

	public restore(snapshot: OpenOrder.Snapshot): OpenOrder<H> {
		return {
			...this.LimitOrder.restore(snapshot),
			filled: this.H.restore(snapshot.filled),
			unfilled: this.H.restore(snapshot.unfilled),
			id: snapshot.id,
		};
	}

	public copy(order: OpenOrder<H>): OpenOrder<H> {
		return {
			...this.LimitOrder.copy(order),
			filled: order.filled,
			unfilled: order.unfilled,
			id: order.id,
		}
	}
}
