import { HLike, HLikeStatic } from './h';
import { LimitOrderLike, LimitOrderStatic } from './limit-order';
import { OrderId } from './order-id';
import { CompositeDataLike, CompositeDataLikeStatic } from './composite-data';
export declare abstract class OpenOrderLike<H extends HLike<H>> extends LimitOrderLike<H> implements CompositeDataLike {
    filled: H;
    unfilled: H;
    id: OrderId;
    constructor(source: OpenOrderLike.Source<H>, H: HLikeStatic<H>);
}
export declare namespace OpenOrderLike {
    interface Literal<H extends HLike<H>> extends LimitOrderLike.Literal<H> {
        filled: HLike.Source<H>;
        unfilled: HLike.Source<H>;
        id: OrderId;
    }
    type Source<H extends HLike<H>> = OpenOrder<H> | Literal<H>;
    interface Snapshot extends LimitOrderLike.Snapshot {
        readonly filled: HLike.Snapshot;
        readonly unfilled: HLike.Snapshot;
        readonly id: OrderId;
    }
}
declare class OpenOrder<H extends HLike<H>> extends OpenOrderLike<H> {
    private OpenOrder;
    constructor(source: OpenOrderLike.Source<H>, OpenOrder: OpenOrderStatic<H>, H: HLikeStatic<H>);
    toJSON(): unknown;
    toString(): string;
}
export declare class OpenOrderStatic<H extends HLike<H>> implements CompositeDataLikeStatic<OpenOrderLike.Source<H>, OpenOrderLike<H>, OpenOrderLike.Snapshot> {
    private H;
    private LimitOrder;
    constructor(H: HLikeStatic<H>, LimitOrder: LimitOrderStatic<H>);
    create(source: OpenOrderLike.Source<H>): OpenOrderLike<H>;
    capture(order: OpenOrderLike<H>): OpenOrderLike.Snapshot;
    restore(snapshot: OpenOrderLike.Snapshot): OpenOrderLike<H>;
}
export {};
