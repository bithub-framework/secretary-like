import { HLike, HStatic } from '../context/h';
import { ConcreteTradeId, ConcreteTradeIdStatic } from './concrete-trade-id';
import { Trade, TradeStatic } from '../context/trade';
export interface ConcreteTrade<ConcreteH extends HLike<ConcreteH>> extends Trade<ConcreteH, ConcreteTradeId> {
}
export declare namespace ConcreteTrade {
    interface MutablePlain<ConcreteH extends HLike<ConcreteH>> extends Trade.MutablePlain<ConcreteH, ConcreteTradeId> {
    }
}
export declare class ConcreteTradeStatic<ConcreteH extends HLike<ConcreteH>> implements TradeStatic<ConcreteH, ConcreteTradeId> {
    private ConcreteH;
    private ConcreteTradeId;
    constructor(ConcreteH: HStatic<ConcreteH>, ConcreteTradeId: ConcreteTradeIdStatic);
    capture(trade: ConcreteTrade<ConcreteH>): Trade.Snapshot;
    restore(snapshot: Trade.Snapshot): ConcreteTrade.MutablePlain<ConcreteH>;
}
