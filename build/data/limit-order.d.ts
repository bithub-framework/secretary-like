import { Length, Side, Action } from './length-action-side';
import { HLike, H, HStatic } from './h';
export interface LimitOrder<H extends HLike<H>> {
    price: H;
    quantity: H;
    side: Side;
    length: Length;
    action: Action;
}
export declare namespace LimitOrder {
    interface Snapshot {
        readonly price: H.Snapshot;
        readonly quantity: H.Snapshot;
        readonly side: Side;
        readonly length: Length;
        readonly operation: Action;
    }
}
export declare class LimitOrderStatic<H extends HLike<H>> {
    protected H: HStatic<H>;
    constructor(H: HStatic<H>);
    captureLimitOrder(order: LimitOrder<H>): LimitOrder.Snapshot;
    restoreLimitOrder(snapshot: LimitOrder.Snapshot): LimitOrder<H>;
    copyLimitOrder(order: LimitOrder<H>): LimitOrder<H>;
}
