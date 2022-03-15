import { TradeId, TradeIdStatic } from '../secretaries/trade-id';
export declare type TechangeTradeId = number | string;
export declare class TexchangeTradeIdStatic implements TradeIdStatic<TechangeTradeId> {
    capture(id: TechangeTradeId): TradeId.Snapshot;
    restore(snapshot: TradeId.Snapshot): TechangeTradeId;
}
