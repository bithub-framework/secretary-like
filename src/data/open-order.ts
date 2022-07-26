import { HLike, H, HFactory } from './h';
import { LimitOrder, LimitOrderFactory } from './limit-order';
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

export class OpenOrderFactory<H extends HLike<H>> {
	public constructor(
		private hFactory: HFactory<H>,
		private limitOrderFactory: LimitOrderFactory<H>,
	) { }

	public capture(order: OpenOrder<H>): OpenOrder.Snapshot {
		return {
			...this.limitOrderFactory.capture(order),
			filled: this.hFactory.capture(order.filled),
			unfilled: this.hFactory.capture(order.unfilled),
			id: order.id,
		}
	}

	public restore(snapshot: OpenOrder.Snapshot): OpenOrder<H> {
		return {
			...this.limitOrderFactory.restore(snapshot),
			filled: this.hFactory.restore(snapshot.filled),
			unfilled: this.hFactory.restore(snapshot.unfilled),
			id: snapshot.id,
		};
	}

	public copy(order: OpenOrder<H>): OpenOrder<H> {
		return {
			...this.limitOrderFactory.copy(order),
			filled: order.filled,
			unfilled: order.unfilled,
			id: order.id,
		}
	}
}
