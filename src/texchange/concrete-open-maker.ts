import { HLike, HStatic } from '../context/h';
import { ConcreteOpenOrder, ConcreteOpenOrderStatic } from './concrete-open-order';
import { OpenMaker, OpenMakerStatic } from '../context/open-maker';
import { ConcreteOrderId } from './concrete-order-id';



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
	public constructor(
		private ConcreteH: HStatic<ConcreteH>,
		private ConcreteOpenOrder: ConcreteOpenOrderStatic<ConcreteH>,
	) { }

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
