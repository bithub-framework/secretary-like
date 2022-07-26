import { Length, Side, Action } from './length-action-side';
import { HLike, H, HStatic } from './h'


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

export class LimitOrderStatic<H extends HLike<H>> {
	public constructor(
		protected H: HStatic<H>,
	) { }

	public captureLimitOrder(order: LimitOrder<H>): LimitOrder.Snapshot {
		return {
			price: this.H.capture(order.price),
			quantity: this.H.capture(order.quantity),
			side: order.side,
			length: order.length,
			action: order.action,
		}
	}

	public restoreLimitOrder(snapshot: LimitOrder.Snapshot): LimitOrder<H> {
		return {
			price: this.H.restore(snapshot.price),
			quantity: this.H.restore(snapshot.quantity),
			side: snapshot.side,
			length: snapshot.length,
			action: snapshot.action,
		}
	}

	public copyLimitOrder(order: LimitOrder<H>): LimitOrder<H> {
		return {
			price: order.price,
			quantity: order.quantity,
			side: order.side,
			length: order.length,
			action: order.action,
		};
	}
}
