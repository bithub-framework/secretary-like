import { HLike, HStatic } from './h';
import { Trade } from './trade';
import { TradeIdStatic } from './trade-id';
export declare type Trades<H extends HLike<H>, TradeId> = Trade<H, TradeId>[];
export declare namespace Trades {
    type Functional<H extends HLike<H>, TradeId> = readonly Trade<H, TradeId>[];
    type Snapshot = readonly Trade.Snapshot[];
}
export declare class TradesStatic<H extends HLike<H>, TradeId> {
    private readonly H;
    private readonly TradeId;
    private readonly Trade;
    constructor(H: HStatic<H>, TradeId: TradeIdStatic<TradeId>);
    capture(trades: Trades<H, TradeId>): Trades.Snapshot;
    restore(snapshot: Trades.Snapshot): Trades<H, TradeId>;
    copy(trades: Trades<H, TradeId>): Trades<H, TradeId>;
}
