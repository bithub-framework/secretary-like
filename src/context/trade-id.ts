export namespace TradeId {
	export type Snapshot = number | string;
}
export interface TradeIdStatic<ConcreteTradeId> {
	capture(id: ConcreteTradeId): TradeId.Snapshot;
	restore(snapshot: TradeId.Snapshot): ConcreteTradeId;
}
