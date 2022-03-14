import { HLike, HStatic } from '../context/h';
import { ConcreteOpenOrder, ConcreteOpenOrderStatic } from './concrete-open-order';
import { OpenMaker, OpenMakerStatic } from '../context/open-maker';
import { ConcreteOrderId } from './concrete-order-id';
export interface ConcreteOpenMaker<ConcreteH extends HLike<ConcreteH>> extends OpenMaker<ConcreteH, ConcreteOrderId>, ConcreteOpenOrder<ConcreteH> {
}
export declare namespace ConcreteOpenMaker {
    interface MutablePlain<ConcreteH extends HLike<ConcreteH>> extends OpenMaker.MutablePlain<ConcreteH, ConcreteOrderId>, ConcreteOpenOrder.MutablePlain<ConcreteH> {
    }
}
export declare class ConcreteOpenMakerStatic<ConcreteH extends HLike<ConcreteH>> implements OpenMakerStatic<ConcreteH, ConcreteOrderId> {
    private ConcreteH;
    private ConcreteOpenOrder;
    constructor(ConcreteH: HStatic<ConcreteH>, ConcreteOpenOrder: ConcreteOpenOrderStatic<ConcreteH>);
    capture(order: ConcreteOpenMaker<ConcreteH>): OpenMaker.Snapshot;
    restore(snapshot: OpenMaker.Snapshot): ConcreteOpenMaker.MutablePlain<ConcreteH>;
}
