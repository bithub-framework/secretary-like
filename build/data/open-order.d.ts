import { HLike, H } from './h';
import { LimitOrder, LimitOrderStatic } from './limit-order';
import { OrderId } from './order-id';
export interface OpenOrder<H extends HLike<H>> extends LimitOrder<H> {
    filled: H;
    unfilled: H;
    id: OrderId;
}
export declare namespace OpenOrder {
    interface Snapshot extends LimitOrder.Snapshot {
        readonly filled: H.Snapshot;
        readonly unfilled: H.Snapshot;
        readonly id: OrderId;
    }
}
export declare class OpenOrderStatic<H extends HLike<H>> extends LimitOrderStatic<H> {
    captureOpenOrder(order: OpenOrder<H>): OpenOrder.Snapshot;
    restoreOpenOrder(snapshot: OpenOrder.Snapshot): OpenOrder<H>;
    copyOpenOrder(order: OpenOrder<H>): OpenOrder<H>;
}
