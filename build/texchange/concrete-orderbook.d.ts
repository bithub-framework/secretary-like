import { HLike } from '../context/h';
import { Orderbook, OrderbookStatic } from '../context/orderbook';
import { ConcreteBookOrderStatic } from './concrete-book-order';
export interface ConcreteOrderbook<ConcreteH extends HLike<ConcreteH>> extends Orderbook<ConcreteH> {
}
export declare namespace ConcreteOrderbook {
    interface MutablePlain<ConcreteH extends HLike<ConcreteH>> extends Orderbook.MutablePlain<ConcreteH> {
    }
}
export declare class ConcreteOrderbookStatic<ConcreteH extends HLike<ConcreteH>> implements OrderbookStatic<ConcreteH> {
    private ConcreteBookOrder;
    constructor(ConcreteBookOrder: ConcreteBookOrderStatic<ConcreteH>);
    capture(orderbook: ConcreteOrderbook<ConcreteH>): Orderbook.Snapshot;
    restore(snapshot: Orderbook.Snapshot): ConcreteOrderbook.MutablePlain<ConcreteH>;
}
