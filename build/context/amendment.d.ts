import { HLike, H } from './h';
import { OpenOrder } from './open-order';
export interface Amendment<ConcreteH extends HLike<ConcreteH>, ConcreteOrderId> extends OpenOrder<ConcreteH, ConcreteOrderId> {
    readonly newUnfilled: ConcreteH;
    readonly newPrice: ConcreteH;
}
export declare namespace Amendment {
    interface MutablePlain<ConcreteH extends HLike<ConcreteH>, ConcreteOrderId> extends OpenOrder.MutablePlain<ConcreteH, ConcreteOrderId> {
        newUnfilled: ConcreteH;
        newPrice: ConcreteH;
    }
    interface Snapshot extends OpenOrder.Snapshot {
        readonly newUnfilled: H.Snapshot;
        readonly newPrice: H.Snapshot;
    }
}
export interface AmendmentStatic<ConcreteH extends HLike<ConcreteH>, ConcreteOrderId> {
    capture(amendment: Amendment<ConcreteH, ConcreteOrderId>): Amendment.Snapshot;
    restore(snapshot: Amendment.Snapshot): Amendment.MutablePlain<ConcreteH, ConcreteOrderId>;
}
