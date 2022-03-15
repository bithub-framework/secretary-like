import { HLike, HStatic } from '../secretaries/h';
import { Amendment, AmendmentStatic } from '../secretaries/amendment';
import { ConcreteOpenOrder } from './concrete-open-order';
import { ConcreteOrderId, ConcreteOrderIdStatic } from './concrete-order-id';
export interface ConcreteAmendment<ConcreteH extends HLike<ConcreteH>> extends Amendment<ConcreteH, ConcreteOrderId>, ConcreteOpenOrder<ConcreteH> {
}
export declare namespace ConcreteAmendment {
    interface MutablePlain<ConcreteH extends HLike<ConcreteH>> extends Amendment.MutablePlain<ConcreteH, ConcreteOrderId>, ConcreteOpenOrder.MutablePlain<ConcreteH> {
    }
}
export declare class ConcreteAmendmentStatic<ConcreteH extends HLike<ConcreteH>> implements AmendmentStatic<ConcreteH, ConcreteOrderId> {
    private readonly H;
    private readonly OrderId;
    private readonly OpenOrder;
    constructor(H: HStatic<ConcreteH>, OrderId: ConcreteOrderIdStatic);
    capture(amendment: ConcreteAmendment<ConcreteH>): Amendment.Snapshot;
    restore(snapshot: Amendment.Snapshot): ConcreteAmendment.MutablePlain<ConcreteH>;
}
