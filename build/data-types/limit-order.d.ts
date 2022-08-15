import { Length, Side, Action } from './length-action-side';
import { HLike, HLikeStatic } from './h';
import { CompositeDataLike, CompositeDataLikeStatic } from './composite-data';
/**
 * typeclass
 */
export declare abstract class LimitOrderLike<H extends HLike<H>> implements CompositeDataLike {
    price: H;
    quantity: H;
    side: Side;
    length: Length;
    action: Action;
    abstract toJSON(): unknown;
    abstract toString(): string;
    constructor(source: LimitOrderLike.Source<H>, H: HLikeStatic<H>);
}
/**
 * namespace about typeclass {@link LimitOrderLike}
 */
export declare namespace LimitOrderLike {
    interface Literal<H extends HLike<H>> {
        price: HLike.Source<H>;
        quantity: HLike.Source<H>;
        side: Side;
        length: Length;
        action: Action;
    }
    type Source<H extends HLike<H>> = LimitOrderLike<H> | Literal<H>;
    interface Snapshot {
        readonly price: HLike.Snapshot;
        readonly quantity: HLike.Snapshot;
        readonly side: Side;
        readonly length: Length;
        readonly action: Action;
    }
}
/**
 * static part of type {@link LimitOrder}
 */
export declare class LimitOrderStatic<H extends HLike<H>> implements CompositeDataLikeStatic<LimitOrderLike.Source<H>, LimitOrderLike<H>, LimitOrderLike.Snapshot> {
    private H;
    constructor(H: HLikeStatic<H>);
    /**
     * @decorator boundMethod
     */
    create(source: LimitOrderLike.Source<H>): LimitOrderLike<H>;
    /**
     * @decorator boundMethod
     */
    capture(order: LimitOrderLike<H>): LimitOrderLike.Snapshot;
    /**
     * @decorator boundMethod
     */
    restore(snapshot: LimitOrderLike.Snapshot): LimitOrderLike<H>;
}
