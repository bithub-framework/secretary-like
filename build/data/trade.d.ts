import { Side } from './length-action-side';
import { HLike, H, HStatic } from './h';
import { TradeId } from './trade-id';
export interface Trade<H extends HLike<H>> {
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
        readonly id: TradeId;
    }
}
export declare class TradeStatic<H extends HLike<H>> {
    private H;
    constructor(H: HStatic<H>);
    captureTrade(trade: Trade<H>): Trade.Snapshot;
    restoreTrade(snapshot: Trade.Snapshot): Trade<H>;
    copyTrade(trade: Trade<H>): Trade<H>;
}
