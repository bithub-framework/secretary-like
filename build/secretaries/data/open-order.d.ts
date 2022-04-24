import { HLike, H, HStatic } from './h';
import { LimitOrder } from './limit-order';
import { OrderId, OrderIdStatic } from './order-id';
export interface OpenOrder<H extends HLike<H>, OrderId> extends LimitOrder<H> {
    filled: H;
    unfilled: H;
    id: OrderId;
}
export declare namespace OpenOrder {
    interface Snapshot extends LimitOrder.Snapshot {
        readonly filled: H.Snapshot;
        readonly unfilled: H.Snapshot;
        readonly id: OrderId.Snapshot;
    }
}
export declare class OpenOrderStatic<H extends HLike<H>, OrderId> {
    private H;
    private OrderId;
    private LimitOrder;
    constructor(H: HStatic<H>, OrderId: OrderIdStatic<OrderId>);
    capture(order: OpenOrder<H, OrderId>): OpenOrder.Snapshot;
    restore(snapshot: OpenOrder.Snapshot): OpenOrder<H, OrderId>;
    copy(order: OpenOrder<H, OrderId>): OpenOrder<H, OrderId>;
}
