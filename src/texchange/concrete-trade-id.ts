import { TradeId, TradeIdStatic } from '../context/trade-id';


export type ConcreteTradeId = number | string;

export class ConcreteTradeIdStatic implements TradeIdStatic<ConcreteTradeId> {
	capture(id: ConcreteTradeId): TradeId.Snapshot {
		return id;
	}
	restore(snapshot: TradeId.Snapshot): ConcreteTradeId {
		return snapshot;
	}
}

export const ConcreteTradeId: TradeIdStatic<ConcreteTradeId> = new ConcreteTradeIdStatic();
