import { HLike, HStatic } from '../secretaries/h';
import { BookOrder, BookOrderStatic } from '../secretaries/book-order';
export interface ConcreteBookOrder<ConcreteH extends HLike<ConcreteH>> extends BookOrder<ConcreteH> {
}
export declare namespace ConcreteBookOrder {
    interface MutablePlain<ConcreteH extends HLike<ConcreteH>> extends BookOrder.MutablePlain<ConcreteH> {
    }
}
export declare class ConcreteBookOrderStatic<ConcreteH extends HLike<ConcreteH>> implements BookOrderStatic<ConcreteH> {
    private readonly H;
    constructor(H: HStatic<ConcreteH>);
    capture(order: ConcreteBookOrder<ConcreteH>): BookOrder.Snapshot;
    restore(snapshot: BookOrder.Snapshot): ConcreteBookOrder.MutablePlain<ConcreteH>;
}
