import { HLike, HStatic } from '../secretaries/h';
import { OpenOrder, OpenOrderStatic } from '../secretaries/open-order';
import { ConcreteOrderId, ConcreteOrderIdStatic } from './concrete-order-id';
import { ConcreteLimitOrder, ConcreteLimitOrderStatic } from './concrete-limit-order';



export interface ConcreteOpenOrder<
	ConcreteH extends HLike<ConcreteH>,
	> extends
	OpenOrder<ConcreteH, ConcreteOrderId>,
	ConcreteLimitOrder<ConcreteH> {
}

export namespace ConcreteOpenOrder {
	export interface MutablePlain<
		ConcreteH extends HLike<ConcreteH>,
		> extends
		OpenOrder.MutablePlain<ConcreteH, ConcreteOrderId>,
		ConcreteLimitOrder.MutablePlain<ConcreteH> {
	}
}

export class ConcreteOpenOrderStatic<
	ConcreteH extends HLike<ConcreteH>,
	> implements OpenOrderStatic<
	ConcreteH,
	ConcreteOrderId
	>{

	private ConcreteLimitOrder: ConcreteLimitOrderStatic<ConcreteH>;

	public constructor(
		private ConcreteH: HStatic<ConcreteH>,
		private ConcreteOrderId: ConcreteOrderIdStatic,
	) {
		this.ConcreteLimitOrder = new ConcreteLimitOrderStatic(this.ConcreteH);
	}

	capture(order: ConcreteOpenOrder<ConcreteH>): OpenOrder.Snapshot {
		return {
			...this.ConcreteLimitOrder.capture(order),
			filled: this.ConcreteH.capture(order.filled),
			unfilled: this.ConcreteH.capture(order.unfilled),
			id: this.ConcreteOrderId.capture(order.id),
		}
	}

	restore(snapshot: OpenOrder.Snapshot): ConcreteOpenOrder.MutablePlain<ConcreteH> {
		return {
			...this.ConcreteLimitOrder.restore(snapshot),
			filled: this.ConcreteH.restore(snapshot.filled),
			unfilled: this.ConcreteH.restore(snapshot.unfilled),
			id: snapshot.id,
		};
	}
}
