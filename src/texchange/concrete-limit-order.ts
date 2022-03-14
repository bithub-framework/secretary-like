import { HLike, HStatic } from '../secretaries/h';
import { LimitOrder, LimitOrderStatic } from '../secretaries/limit-order';



export interface ConcreteLimitOrder<
	ConcreteH extends HLike<ConcreteH>,
	> extends LimitOrder<ConcreteH> { }


export namespace ConcreteLimitOrder {
	export interface MutablePlain<
		ConcreteH extends HLike<ConcreteH>,
		> extends LimitOrder.MutablePlain<ConcreteH> {
		price: ConcreteH;
		quantity: ConcreteH;
	}
}
export class ConcreteLimitOrderStatic<
	ConcreteH extends HLike<ConcreteH>,
	> implements LimitOrderStatic<
	ConcreteH
	> {
	public constructor(
		private H: HStatic<ConcreteH>,
	) { }

	capture(order: ConcreteLimitOrder<ConcreteH>): LimitOrder.Snapshot {
		return {
			price: this.H.capture(order.price),
			quantity: this.H.capture(order.quantity),
			side: order.side,
			length: order.length,
			operation: order.operation,
		}
	}
	restore(snapshot: LimitOrder.Snapshot): ConcreteLimitOrder.MutablePlain<ConcreteH> {
		return {
			price: this.H.restore(snapshot.price),
			quantity: this.H.restore(snapshot.quantity),
			side: snapshot.side,
			length: snapshot.length,
			operation: snapshot.operation,
		}
	}
}
