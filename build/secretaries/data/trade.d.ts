import { Side } from './side';
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
    capture(trade: Trade<H>): Trade.Snapshot;
    restore(snapshot: Trade.Snapshot): Trade<H>;
    copy(trade: Trade<H>): Trade<H>;
}
