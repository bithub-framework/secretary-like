import { HLike, HStatic } from '../secretaries/h';
import { ConcreteOpenOrder } from './concrete-open-order';
import { OpenMaker, OpenMakerStatic } from '../secretaries/open-maker';
import { ConcreteOrderId, ConcreteOrderIdStatic } from './concrete-order-id';
export interface ConcreteOpenMaker<ConcreteH extends HLike<ConcreteH>> extends OpenMaker<ConcreteH, ConcreteOrderId>, ConcreteOpenOrder<ConcreteH> {
}
export declare namespace ConcreteOpenMaker {
    interface MutablePlain<ConcreteH extends HLike<ConcreteH>> extends OpenMaker.MutablePlain<ConcreteH, ConcreteOrderId>, ConcreteOpenOrder.MutablePlain<ConcreteH> {
    }
}
export declare class ConcreteOpenMakerStatic<ConcreteH extends HLike<ConcreteH>> implements OpenMakerStatic<ConcreteH, ConcreteOrderId> {
    private readonly H;
    private readonly OrderId;
    private readonly OpenOrder;
    constructor(H: HStatic<ConcreteH>, OrderId: ConcreteOrderIdStatic);
    capture(order: ConcreteOpenMaker<ConcreteH>): OpenMaker.Snapshot;
    restore(snapshot: OpenMaker.Snapshot): ConcreteOpenMaker.MutablePlain<ConcreteH>;
}
