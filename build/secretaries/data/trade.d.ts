import { Side } from './side';
import { HLike, H, HStatic } from './h';
import { TradeId, TradeIdStatic } from './trade-id';
export interface Trade<H extends HLike<H>, TradeId> {
    side: Side;
    price: H;
    quantity: H;
    time: number;
    id: TradeId;
}
export declare namespace Trade {
    interface Snapshot {
        readonly side: Side;
        readonly price: H.Snapshot;
        readonly quantity: H.Snapshot;
        readonly time: number;
        readonly id: TradeId.Snapshot;
    }
}
export declare class TradeStatic<H extends HLike<H>, TradeId> {
    private readonly H;
    private readonly TradeId;
    constructor(H: HStatic<H>, TradeId: TradeIdStatic<TradeId>);
    capture(trade: Trade<H, TradeId>): Trade.Snapshot;
    restore(snapshot: Trade.Snapshot): Trade<H, TradeId>;
    copy(trade: Trade<H, TradeId>): Trade<H, TradeId>;
}