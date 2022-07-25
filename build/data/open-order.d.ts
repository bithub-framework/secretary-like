import { HLike, H } from './h';
import { LimitOrder } from './limit-order';
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
    class Static<H extends HLike<H>> {
        private H;
        private LimitOrder;
        constructor(H: H.Static<H>);
        capture(order: OpenOrder<H>): OpenOrder.Snapshot;
        restore(snapshot: OpenOrder.Snapshot): OpenOrder<H>;
        copy(order: OpenOrder<H>): OpenOrder<H>;
    }
}
