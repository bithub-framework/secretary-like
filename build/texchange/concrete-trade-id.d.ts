import { TradeId, TradeIdStatic } from '../context/trade-id';
export declare type ConcreteTradeId = number | string;
export declare class ConcreteTradeIdStatic implements TradeIdStatic<ConcreteTradeId> {
    capture(id: ConcreteTradeId): TradeId.Snapshot;
    restore(snapshot: TradeId.Snapshot): ConcreteTradeId;
}
export declare const ConcreteTradeId: TradeIdStatic<ConcreteTradeId>;
