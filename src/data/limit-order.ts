import { Length, Side, Action } from './length-action-side';
import { HLike, H } from './h'


export interface LimitOrder<H extends HLike<H>> {
	price: H;
	quantity: H;
	side: Side;
	length: Length;
	operation: Action;
}

export namespace LimitOrder {
	export interface Snapshot {
		readonly price: H.Snapshot;
		readonly quantity: H.Snapshot;
		readonly side: Side;
		readonly length: Length;
		readonly operation: Action;
	}

	export class Static<H extends HLike<H>> {
		public constructor(
			private H: H.Static<H>,
		) { }

		public capture(order: LimitOrder<H>): LimitOrder.Snapshot {
			return {
				price: this.H.capture(order.price),
				quantity: this.H.capture(order.quantity),
				side: order.side,
				length: order.length,
				operation: order.operation,
			}
		}

		public restore(snapshot: LimitOrder.Snapshot): LimitOrder<H> {
			return {
				price: this.H.restore(snapshot.price),
				quantity: this.H.restore(snapshot.quantity),
				side: snapshot.side,
				length: snapshot.length,
				operation: snapshot.operation,
			}
		}

		public copy(order: LimitOrder<H>): LimitOrder<H> {
			return {
				price: order.price,
				quantity: order.quantity,
				side: order.side,
				length: order.length,
				operation: order.operation,
			};
		}
	}

}
