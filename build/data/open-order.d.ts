import { HLike, H, HFactory } from './h';
import { LimitOrder, LimitOrderFactory } from './limit-order';
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
export declare class OpenOrderFactory<H extends HLike<H>> {
    private hFactory;
    private limitOrderFactory;
    constructor(hFactory: HFactory<H>, limitOrderFactory: LimitOrderFactory<H>);
    capture(order: OpenOrder<H>): OpenOrder.Snapshot;
    restore(snapshot: OpenOrder.Snapshot): OpenOrder<H>;
    copy(order: OpenOrder<H>): OpenOrder<H>;
}
