import { Length, Side, Action } from './length-action-side';
import { HLike, H, HFactory } from './h'


export interface LimitOrder<H extends HLike<H>> {
	price: H;
	quantity: H;
	side: Side;
	length: Length;
	action: Action;
}

export namespace LimitOrder {
	export interface Snapshot {
		readonly price: H.Snapshot;
		readonly quantity: H.Snapshot;
		readonly side: Side;
		readonly length: Length;
		readonly action: Action;
	}
}

export class LimitOrderFactory<H extends HLike<H>> {
	public constructor(
		private hFactory: HFactory<H>,
	) { }

	public capture(order: LimitOrder<H>): LimitOrder.Snapshot {
		return {
			price: this.hFactory.capture(order.price),
			quantity: this.hFactory.capture(order.quantity),
			side: order.side,
			length: order.length,
			action: order.action,
		}
	}

	public restore(snapshot: LimitOrder.Snapshot): LimitOrder<H> {
		return {
			price: this.hFactory.restore(snapshot.price),
			quantity: this.hFactory.restore(snapshot.quantity),
			side: snapshot.side,
			length: snapshot.length,
			action: snapshot.action,
		}
	}

	public copy(order: LimitOrder<H>): LimitOrder<H> {
		return {
			price: order.price,
			quantity: order.quantity,
			side: order.side,
			length: order.length,
			action: order.action,
		};
	}
}
