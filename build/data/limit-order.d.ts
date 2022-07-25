import { Length, Side, Action } from './length-action-side';
import { HLike, H } from './h';
export interface LimitOrder<H extends HLike<H>> {
    price: H;
    quantity: H;
    side: Side;
    length: Length;
    operation: Action;
}
export declare namespace LimitOrder {
    interface Snapshot {
        readonly price: H.Snapshot;
        readonly quantity: H.Snapshot;
        readonly side: Side;
        readonly length: Length;
        readonly operation: Action;
    }
    class Static<H extends HLike<H>> {
        private H;
        constructor(H: H.Static<H>);
        capture(order: LimitOrder<H>): LimitOrder.Snapshot;
        restore(snapshot: LimitOrder.Snapshot): LimitOrder<H>;
        copy(order: LimitOrder<H>): LimitOrder<H>;
    }
}
