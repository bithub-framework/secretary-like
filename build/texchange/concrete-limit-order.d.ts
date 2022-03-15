import { HLike, HStatic } from '../secretaries/h';
import { LimitOrder, LimitOrderStatic } from '../secretaries/limit-order';
export interface ConcreteLimitOrder<ConcreteH extends HLike<ConcreteH>> extends LimitOrder<ConcreteH> {
}
export declare namespace ConcreteLimitOrder {
    interface MutablePlain<ConcreteH extends HLike<ConcreteH>> extends LimitOrder.MutablePlain<ConcreteH> {
        price: ConcreteH;
        quantity: ConcreteH;
    }
}
export declare class ConcreteLimitOrderStatic<ConcreteH extends HLike<ConcreteH>> implements LimitOrderStatic<ConcreteH> {
    private readonly H;
    constructor(H: HStatic<ConcreteH>);
    capture(order: ConcreteLimitOrder<ConcreteH>): LimitOrder.Snapshot;
    restore(snapshot: LimitOrder.Snapshot): ConcreteLimitOrder.MutablePlain<ConcreteH>;
}
