import { HLike, H, HStatic } from './h';
import { LimitOrder } from './limit-order';
import { OrderId, OrderIdStatic } from './order-id';
export interface OpenOrder<H extends HLike<H>, OrderId> extends LimitOrder<H> {
    readonly filled: H;
    readonly unfilled: H;
    readonly id: OrderId;
}
export declare namespace OpenOrder {
    interface MutablePlain<H extends HLike<H>, OrderId> extends LimitOrder.MutablePlain<H> {
        filled: H;
        unfilled: H;
        id: OrderId;
    }
    interface Snapshot extends LimitOrder.Snapshot {
        readonly filled: H.Snapshot;
        readonly unfilled: H.Snapshot;
        readonly id: OrderId.Snapshot;
    }
}
export declare class OpenOrderStatic<H extends HLike<H>, OrderId> {
    private readonly H;
    private readonly OrderId;
    private readonly LimitOrder;
    constructor(H: HStatic<H>, OrderId: OrderIdStatic<OrderId>);
    capture(order: OpenOrder<H, OrderId>): OpenOrder.Snapshot;
    restore(snapshot: OpenOrder.Snapshot): OpenOrder.MutablePlain<H, OrderId>;
}
