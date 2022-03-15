import { HLike, HStatic } from '../secretaries/h';
import { ConcreteTradeId, ConcreteTradeIdStatic } from './concrete-trade-id';
import { Trade, TradeStatic } from '../secretaries/trade';
export interface ConcreteTrade<ConcreteH extends HLike<ConcreteH>> extends Trade<ConcreteH, ConcreteTradeId> {
}
export declare namespace ConcreteTrade {
    interface MutablePlain<ConcreteH extends HLike<ConcreteH>> extends Trade.MutablePlain<ConcreteH, ConcreteTradeId> {
    }
}
export declare class ConcreteTradeStatic<ConcreteH extends HLike<ConcreteH>> implements TradeStatic<ConcreteH, ConcreteTradeId> {
    private readonly H;
    private readonly TradeId;
    constructor(H: HStatic<ConcreteH>, TradeId: ConcreteTradeIdStatic);
    capture(trade: ConcreteTrade<ConcreteH>): Trade.Snapshot;
    restore(snapshot: Trade.Snapshot): ConcreteTrade.MutablePlain<ConcreteH>;
}
