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

	private ConcreteOpenOrder: ConcreteOpenOrderStatic<ConcreteH>;

	public constructor(
		private ConcreteH: HStatic<ConcreteH>,
		private ConcreteOrderId: ConcreteOrderIdStatic,
	) {
		this.ConcreteOpenOrder = new ConcreteOpenOrderStatic(
			this.ConcreteH, this.ConcreteOrderId,
		);
	}

	capture(order: ConcreteOpenMaker<ConcreteH>): OpenMaker.Snapshot {
		return {
			...this.ConcreteOpenOrder.capture(order),
			behind: this.ConcreteH.capture(order.behind),
		}
	}
	restore(snapshot: OpenMaker.Snapshot): ConcreteOpenMaker.MutablePlain<ConcreteH> {
		return {
			...this.ConcreteOpenOrder.restore(snapshot),
			behind: this.ConcreteH.restore(snapshot.behind),
		}
	}
}
