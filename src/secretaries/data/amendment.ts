import { HLike, H, HStatic } from './h';
import { OpenOrder, OpenOrderStatic } from './open-order';
import { OrderIdStatic } from './order-id';



export interface Amendment<H extends HLike<H>, OrderId>
	extends OpenOrder<H, OrderId> {

	newUnfilled: H;
	newPrice: H;
}

export namespace Amendment {
	export interface Functional<H extends HLike<H>, OrderId>
		extends OpenOrder.Functional<H, OrderId> {

		readonly newUnfilled: H;
		readonly newPrice: H;
	}

	export interface Snapshot extends OpenOrder.Snapshot {
		readonly newUnfilled: H.Snapshot;
		readonly newPrice: H.Snapshot;
	}
}

export class AmendmentStatic<H extends HLike<H>, OrderId> {
	private readonly OpenOrder = new OpenOrderStatic<H, OrderId>(
		this.H, this.OrderId,
	);

	public constructor(
		private readonly H: HStatic<H>,
		private readonly OrderId: OrderIdStatic<OrderId>,
	) { }

	public capture(
		amendment: Amendment<H, OrderId> | Amendment.Functional<H, OrderId>,
	): Amendment.Snapshot {
		return {
			...this.OpenOrder.capture(amendment),
			newUnfilled: this.H.capture(amendment.newUnfilled),
			newPrice: this.H.capture(amendment.newPrice),
		}
	}

	public restore(
		snapshot: Amendment.Snapshot,
	): Amendment<H, OrderId> | Amendment.Functional<H, OrderId> {
		return {
			...this.OpenOrder.restore(snapshot),
			newUnfilled: this.H.restore(snapshot.newUnfilled),
			newPrice: this.H.restore(snapshot.newPrice),
		};
	}

	public copy(
		amendment: Amendment<H, OrderId> | Amendment.Functional<H, OrderId>,
	): Amendment<H, OrderId> | Amendment.Functional<H, OrderId> {
		return {
			...this.OpenOrder.copy(amendment),
			newUnfilled: amendment.newUnfilled,
			newPrice: amendment.newPrice,
		};
	}
}
