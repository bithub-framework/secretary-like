import { TradeId, TradeIdStatic } from '../secretaries/trade-id';
export declare type TexchangeTradeId = number | string;
export declare class TexchangeTradeIdStatic implements TradeIdStatic<TexchangeTradeId> {
    capture(id: TexchangeTradeId): TradeId.Snapshot;
    restore(snapshot: TradeId.Snapshot): TexchangeTradeId;
}
