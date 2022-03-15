import { HLike, HStatic } from '../secretaries/h';
import { ConcreteOpenOrder, ConcreteOpenOrderStatic } from './concrete-open-order';
import { OpenMaker, OpenMakerStatic } from '../secretaries/open-maker';
import { ConcreteOrderId, ConcreteOrderIdStatic } from './concrete-order-id';



export interface ConcreteOpenMaker<
	ConcreteH extends HLike<ConcreteH>,
	> extends
	OpenMaker<ConcreteH, ConcreteOrderId>,
	ConcreteOpenOrder<ConcreteH> { }


export namespace ConcreteOpenMaker {
	export interface MutablePlain<
		ConcreteH extends HLike<ConcreteH>,
		> extends
		OpenMaker.MutablePlain<ConcreteH, ConcreteOrderId>,
		ConcreteOpenOrder.MutablePlain<ConcreteH> { }
}


export class ConcreteOpenMakerStatic<
	ConcreteH extends HLike<ConcreteH>,
	> implements OpenMakerStatic<
	ConcreteH,
	ConcreteOrderId
	>{

	private readonly OpenOrder: ConcreteOpenOrderStatic<ConcreteH>;

	public constructor(
		private readonly H: HStatic<ConcreteH>,
		private readonly OrderId: ConcreteOrderIdStatic,
	) {
		this.OpenOrder = new ConcreteOpenOrderStatic(
			this.H, this.OrderId,
		);
	}

	public capture(order: ConcreteOpenMaker<ConcreteH>): OpenMaker.Snapshot {
		return {
			...this.OpenOrder.capture(order),
			behind: this.H.capture(order.behind),
		}
	}
	public restore(snapshot: OpenMaker.Snapshot): ConcreteOpenMaker.MutablePlain<ConcreteH> {
		return {
			...this.OpenOrder.restore(snapshot),
			behind: this.H.restore(snapshot.behind),
		}
	}
}
