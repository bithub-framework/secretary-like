import { Side } from './pairs';
import { HLike, SerializableHStatic } from './h';
import { TradeId } from './trade-id';
import { SerializableStatic } from './serializable';
export declare abstract class TradeLike<H extends HLike<H>> {
    side: Side;
    price: H;
    quantity: H;
    time: number;
    id: TradeId;
    abstract toJSON(): unknown;
    abstract toString(): string;
    constructor(source: TradeLike.Source<H>, H: SerializableHStatic<H>);
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
export interface SerializableTradeStatic<H extends HLike<H>> extends SerializableStatic<TradeLike.Source<H>, TradeLike<H>, TradeLike.Snapshot> {
}
export declare class TradeStatic<H extends HLike<H>> implements SerializableTradeStatic<H> {
    private H;
    constructor(H: SerializableHStatic<H>);
    /**
     * @decorator boundMethod
     */
    create(source: TradeLike.Source<H>): TradeLike<H>;
    /**
     * @decorator boundMethod
     */
    capture(trade: TradeLike<H>): TradeLike.Snapshot;
    /**
     * @decorator boundMethod
     */
    restore(snapshot: TradeLike.Snapshot): TradeLike<H>;
}
