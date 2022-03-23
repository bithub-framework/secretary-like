import { Side } from './side';
import { Length } from './length';
import { Operation } from './operation';
import { HLike, H, HStatic } from './h';
export interface LimitOrder<H extends HLike<H>> {
    readonly price: H;
    readonly quantity: H;
    readonly side: Side;
    readonly length: Length;
    readonly operation: Operation;
}
export declare namespace LimitOrder {
    interface MutablePlain<H extends HLike<H>> {
        price: H;
        quantity: H;
        side: Side;
        length: Length;
        operation: Operation;
    }
    interface Snapshot {
        readonly price: H.Snapshot;
        readonly quantity: H.Snapshot;
        readonly side: Side;
        readonly length: Length;
        readonly operation: Operation;
    }
}
export declare class LimitOrderStatic<H extends HLike<H>> {
    private readonly H;
    constructor(H: HStatic<H>);
    capture(order: LimitOrder<H>): LimitOrder.Snapshot;
    restore(snapshot: LimitOrder.Snapshot): LimitOrder.MutablePlain<H>;
}
