import { HLike, HStatic } from '../secretaries/h';
import { Amendment, AmendmentStatic } from '../secretaries/amendment';
import { ConcreteOpenOrder, ConcreteOpenOrderStatic } from './concrete-open-order';
import { ConcreteOrderId, ConcreteOrderIdStatic } from './concrete-order-id';


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

	private readonly OpenOrder: ConcreteOpenOrderStatic<ConcreteH>;

	public constructor(
		private readonly H: HStatic<ConcreteH>,
		private readonly OrderId: ConcreteOrderIdStatic,
	) {
		this.OpenOrder = new ConcreteOpenOrderStatic(
			this.H, this.OrderId,
		);
	}

	public capture(amendment: ConcreteAmendment<ConcreteH>): Amendment.Snapshot {
		return {
			...this.OpenOrder.capture(amendment),
			newUnfilled: this.H.capture(amendment.newUnfilled),
			newPrice: this.H.capture(amendment.newPrice),
		}
	}

	public restore(snapshot: Amendment.Snapshot): ConcreteAmendment.MutablePlain<ConcreteH> {
		return {
			...this.OpenOrder.restore(snapshot),
			newUnfilled: this.H.restore(snapshot.newUnfilled),
			newPrice: this.H.restore(snapshot.newPrice),
		};
	}
}
