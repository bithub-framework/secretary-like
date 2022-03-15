import { HLike, HStatic } from '../secretaries/h';
import { OpenOrder, OpenOrderStatic } from '../secretaries/open-order';
import { ConcreteOrderId, ConcreteOrderIdStatic } from './concrete-order-id';
import { ConcreteLimitOrder } from './concrete-limit-order';
export interface ConcreteOpenOrder<ConcreteH extends HLike<ConcreteH>> extends OpenOrder<ConcreteH, ConcreteOrderId>, ConcreteLimitOrder<ConcreteH> {
}
export declare namespace ConcreteOpenOrder {
    interface MutablePlain<ConcreteH extends HLike<ConcreteH>> extends OpenOrder.MutablePlain<ConcreteH, ConcreteOrderId>, ConcreteLimitOrder.MutablePlain<ConcreteH> {
    }
}
export declare class ConcreteOpenOrderStatic<ConcreteH extends HLike<ConcreteH>> implements OpenOrderStatic<ConcreteH, ConcreteOrderId> {
    private readonly H;
    private readonly OrderId;
    private readonly LimitOrder;
    constructor(H: HStatic<ConcreteH>, OrderId: ConcreteOrderIdStatic);
    capture(order: ConcreteOpenOrder<ConcreteH>): OpenOrder.Snapshot;
    restore(snapshot: OpenOrder.Snapshot): ConcreteOpenOrder.MutablePlain<ConcreteH>;
}
