import { HLike, H } from './h';
import { LimitOrder } from './limit-order';
import { OrderId } from './order-id';
export interface OpenOrder<ConcreteH extends HLike<ConcreteH>, ConcreteOrderId> extends LimitOrder<ConcreteH> {
    readonly filled: ConcreteH;
    readonly unfilled: ConcreteH;
    readonly id: ConcreteOrderId;
}
export declare namespace OpenOrder {
    interface MutablePlain<ConcreteH extends HLike<ConcreteH>, ConcreteOrderId> extends LimitOrder.MutablePlain<ConcreteH> {
        filled: ConcreteH;
        unfilled: ConcreteH;
        id: ConcreteOrderId;
    }
    interface Snapshot extends LimitOrder.Snapshot {
        readonly filled: H.Snapshot;
        readonly unfilled: H.Snapshot;
        readonly id: OrderId.Snapshot;
    }
}
export interface OpenOrderStatic<ConcreteH extends HLike<ConcreteH>, ConcreteOrderId> {
    capture(order: OpenOrder<ConcreteH, ConcreteOrderId>): OpenOrder.Snapshot;
    restore(snapshot: OpenOrder.Snapshot): OpenOrder.MutablePlain<ConcreteH, ConcreteOrderId>;
}
