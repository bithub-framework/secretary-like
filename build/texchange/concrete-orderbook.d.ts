import { HLike, HStatic } from '../secretaries/h';
import { Orderbook, OrderbookStatic } from '../secretaries/orderbook';
export interface ConcreteOrderbook<ConcreteH extends HLike<ConcreteH>> extends Orderbook<ConcreteH> {
}
export declare namespace ConcreteOrderbook {
    interface MutablePlain<ConcreteH extends HLike<ConcreteH>> extends Orderbook.MutablePlain<ConcreteH> {
    }
}
export declare class ConcreteOrderbookStatic<ConcreteH extends HLike<ConcreteH>> implements OrderbookStatic<ConcreteH> {
    private ConcreteH;
    private ConcreteBookOrder;
    constructor(ConcreteH: HStatic<ConcreteH>);
    capture(orderbook: ConcreteOrderbook<ConcreteH>): Orderbook.Snapshot;
    restore(snapshot: Orderbook.Snapshot): ConcreteOrderbook.MutablePlain<ConcreteH>;
}
