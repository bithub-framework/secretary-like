import { Side } from './length-action-side';
import { HLike, HLikeStatic } from './h';
import { TradeId } from './trade-id';
import { CompositeDataLike, CompositeDataLikeStatic } from './composite-data';
export declare abstract class TradeLike<H extends HLike<H>> implements CompositeDataLike {
    side: Side;
    price: H;
    quantity: H;
    time: number;
    id: TradeId;
    abstract toJSON(): unknown;
    abstract toString(): string;
    constructor(source: TradeLike.Source<H>, H: HLikeStatic<H>);
}
export declare namespace TradeLike {
    interface Literal<H extends HLike<H>> {
        side: Side;
        price: HLike.Source<H>;
        quantity: HLike.Source<H>;
        time: number;
        id: TradeId;
    }
    type Source<H extends HLike<H>> = TradeLike<H> | Literal<H>;
    interface Snapshot {
        readonly side: Side;
        readonly price: HLike.Snapshot;
        readonly quantity: HLike.Snapshot;
        readonly time: number;
        readonly id: TradeId;
    }
}
export declare class TradeStatic<H extends HLike<H>> implements CompositeDataLikeStatic<TradeLike.Source<H>, TradeLike<H>, TradeLike.Snapshot> {
    private H;
    constructor(H: HLikeStatic<H>);
    create(source: TradeLike.Source<H>): TradeLike<H>;
    capture(trade: TradeLike<H>): TradeLike.Snapshot;
    restore(snapshot: TradeLike.Snapshot): TradeLike<H>;
}
