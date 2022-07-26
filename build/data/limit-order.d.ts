import { Length, Side, Action } from './length-action-side';
import { HLike, H, HFactory } from './h';
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
        readonly action: Action;
    }
}
export declare class LimitOrderFactory<H extends HLike<H>> {
    private hFactory;
    constructor(hFactory: HFactory<H>);
    capture(order: LimitOrder<H>): LimitOrder.Snapshot;
    restore(snapshot: LimitOrder.Snapshot): LimitOrder<H>;
    copy(order: LimitOrder<H>): LimitOrder<H>;
}
