export declare namespace TradeId {
    type Snapshot = number | string;
}
export interface TradeIdStatic<TradeId> {
    capture(id: TradeId): TradeId.Snapshot;
    restore(snapshot: TradeId.Snapshot): TradeId;
}
