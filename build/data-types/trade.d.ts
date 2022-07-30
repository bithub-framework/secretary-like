import { Side } from './length-action-side';
import { HLike, H, HFactory } from './h';
import { TradeId } from './trade-id';
export interface TradeLike<H extends HLike<H>> extends Trade.Source<H> {
    side: Side;
    price: H;
    quantity: H;
    time: number;
    id: TradeId;
    toJSON(): unknown;
    toString(): string;
}
declare class Trade<H extends HLike<H>> implements TradeLike<H> {
    private factory;
    side: Side;
    price: H;
    quantity: H;
    time: number;
    id: TradeId;
    constructor(source: Trade.Source<H>, factory: TradeFactory<H>);
    toJSON(): unknown;
    toString(): string;
}
export declare namespace Trade {
    interface Source<H extends HLike<H>> {
        side: Side;
        price: H;
        quantity: H;
        time: number;
        id: TradeId;
    }
    interface Snapshot {
        readonly side: Side;
        readonly price: H.Snapshot;
        readonly quantity: H.Snapshot;
        readonly time: number;
        readonly id: TradeId;
    }
}
export declare class TradeFactory<H extends HLike<H>> {
    private hFactory;
    constructor(hFactory: HFactory<H>);
    new(source: Trade.Source<H>): Trade<H>;
    capture(trade: TradeLike<H>): Trade.Snapshot;
    restore(snapshot: Trade.Snapshot): Trade<H>;
}
export {};
