import { Side } from './length-action-side';
import { HLike, H } from './h';
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
    class Static<H extends HLike<H>> {
        private H;
        constructor(H: H.Static<H>);
        capture(trade: Trade<H>): Trade.Snapshot;
        restore(snapshot: Trade.Snapshot): Trade<H>;
        copy(trade: Trade<H>): Trade<H>;
    }
}
