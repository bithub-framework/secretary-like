import { HLike, H } from './h';
import { OpenOrder } from './open-order';
export interface OpenMaker<ConcreteH extends HLike<ConcreteH>, ConcreteOrderId> extends OpenOrder<ConcreteH, ConcreteOrderId> {
    readonly behind: ConcreteH;
}
export declare namespace OpenMaker {
    interface MutablePlain<ConcreteH extends HLike<ConcreteH>, ConcreteOrderId> extends OpenOrder.MutablePlain<ConcreteH, ConcreteOrderId> {
        behind: ConcreteH;
    }
    interface Snapshot extends OpenOrder.Snapshot {
        readonly behind: H.Snapshot;
    }
}
export interface OpenMakerStatic<ConcreteH extends HLike<ConcreteH>, ConcreteOrderId> {
    capture(order: OpenMaker<ConcreteH, ConcreteOrderId>): OpenMaker.Snapshot;
    restore(snapshot: OpenMaker.Snapshot): OpenMaker.MutablePlain<ConcreteH, ConcreteOrderId>;
}
