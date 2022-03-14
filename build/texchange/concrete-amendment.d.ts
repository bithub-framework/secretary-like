import { HLike, HStatic } from '../context/h';
import { Amendment, AmendmentStatic } from '../context/amendment';
import { ConcreteOpenOrder, ConcreteOpenOrderStatic } from './concrete-open-order';
import { ConcreteOrderId } from './concrete-order-id';
export interface ConcreteAmendment<ConcreteH extends HLike<ConcreteH>> extends Amendment<ConcreteH, ConcreteOrderId>, ConcreteOpenOrder<ConcreteH> {
}
export declare namespace ConcreteAmendment {
    interface MutablePlain<ConcreteH extends HLike<ConcreteH>> extends Amendment.MutablePlain<ConcreteH, ConcreteOrderId>, ConcreteOpenOrder.MutablePlain<ConcreteH> {
    }
}
export declare class ConcreteAmendmentStatic<ConcreteH extends HLike<ConcreteH>> implements AmendmentStatic<ConcreteH, ConcreteOrderId> {
    private ConcreteH;
    private ConcreteOpenOrder;
    constructor(ConcreteH: HStatic<ConcreteH>, ConcreteOpenOrder: ConcreteOpenOrderStatic<ConcreteH>);
    capture(amendment: ConcreteAmendment<ConcreteH>): Amendment.Snapshot;
    restore(snapshot: Amendment.Snapshot): ConcreteAmendment.MutablePlain<ConcreteH>;
}
