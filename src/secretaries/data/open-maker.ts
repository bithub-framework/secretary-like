import { HLike, H, HStatic } from './h';
import { OpenOrder, OpenOrderStatic } from './open-order';
import { OrderIdStatic } from './order-id';


export interface OpenMaker<H extends HLike<H>, OrderId>
	extends OpenOrder<H, OrderId> {

	behind: H;
}

export namespace OpenMaker {
	export interface Functional<H extends HLike<H>, OrderId>
		extends OpenOrder.Functional<H, OrderId> {

		readonly behind: H;
	}

	export interface Snapshot extends OpenOrder.Snapshot {
		readonly behind: H.Snapshot;
	}
}

export class OpenMakerStatic<H extends HLike<H>, OrderId> {
	private readonly OpenOrder = new OpenOrderStatic(
		this.H, this.OrderId,
	);

	public constructor(
		private readonly H: HStatic<H>,
		private readonly OrderId: OrderIdStatic<OrderId>,
	) { }

	public capture(
		order: OpenMaker<H, OrderId> | OpenMaker.Functional<H, OrderId>,
	): OpenMaker.Snapshot {
		return {
			...this.OpenOrder.capture(order),
			behind: this.H.capture(order.behind),
		}
	}

	public restore(
		snapshot: OpenMaker.Snapshot,
	): OpenMaker<H, OrderId> | OpenMaker.Functional<H, OrderId> {
		return {
			...this.OpenOrder.restore(snapshot),
			behind: this.H.restore(snapshot.behind),
		}
	}

	public copy(
		order: OpenMaker<H, OrderId> | OpenMaker.Functional<H, OrderId>,
	): OpenMaker<H, OrderId> | OpenMaker.Functional<H, OrderId> {
		return {
			...this.OpenOrder.copy(order),
			behind: order.behind,
		};
	}
}
