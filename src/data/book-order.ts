import { HLike, H } from './h';
import { Side } from './length-action-side';


export interface BookOrder<H extends HLike<H>> {
	price: H;
	quantity: H;
	side: Side,
}

export namespace BookOrder {
	export interface Snapshot {
		readonly price: H.Snapshot;
		readonly quantity: H.Snapshot;
		readonly side: Side;
	}

	export class Static<H extends HLike<H>> {
		public constructor(
			private H: H.Static<H>,
		) { }

		public capture(order: BookOrder<H>): BookOrder.Snapshot {
			return {
				price: this.H.capture(order.price),
				quantity: this.H.capture(order.quantity),
				side: order.side,
			}
		}

		public restore(snapshot: BookOrder.Snapshot): BookOrder<H> {
			return {
				price: this.H.restore(snapshot.price),
				quantity: this.H.restore(snapshot.quantity),
				side: snapshot.side,
			}
		}

		public copy(order: BookOrder<H>): BookOrder<H> {
			return {
				price: order.price,
				quantity: order.quantity,
				side: order.side,
			};
		}
	}

}
