import { HLike, HStatic } from '../context/h';
import { Amendment, AmendmentStatic } from '../context/amendment';
import { ConcreteOpenOrder, ConcreteOpenOrderStatic } from './concrete-open-order';
import { ConcreteOrderId } from './concrete-order-id';


export interface ConcreteAmendment<
	ConcreteH extends HLike<ConcreteH>,
	> extends
	Amendment<ConcreteH, ConcreteOrderId>,
	ConcreteOpenOrder<ConcreteH> { }


export namespace ConcreteAmendment {
	export interface MutablePlain<
		ConcreteH extends HLike<ConcreteH>,
		> extends
		Amendment.MutablePlain<ConcreteH, ConcreteOrderId>,
		ConcreteOpenOrder.MutablePlain<ConcreteH> { }
}


export class ConcreteAmendmentStatic<
	ConcreteH extends HLike<ConcreteH>,
	> implements AmendmentStatic<
	ConcreteH,
	ConcreteOrderId
	>{
	public constructor(
		private ConcreteH: HStatic<ConcreteH>,
		private ConcreteOpenOrder: ConcreteOpenOrderStatic<ConcreteH>,
	) { }

	capture(amendment: ConcreteAmendment<ConcreteH>): Amendment.Snapshot {
		return {
			...this.ConcreteOpenOrder.capture(amendment),
			newUnfilled: this.ConcreteH.capture(amendment.newUnfilled),
			newPrice: this.ConcreteH.capture(amendment.newPrice),
		}
	}

	restore(snapshot: Amendment.Snapshot): ConcreteAmendment.MutablePlain<ConcreteH> {
		return {
			...this.ConcreteOpenOrder.restore(snapshot),
			newUnfilled: this.ConcreteH.restore(snapshot.newUnfilled),
			newPrice: this.ConcreteH.restore(snapshot.newPrice),
		};
	}
}
