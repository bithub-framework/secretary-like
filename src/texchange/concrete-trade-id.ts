import { TradeId, TradeIdStatic } from '../secretaries/trade-id';


export type ConcreteTradeId = number | string;

export class ConcreteTradeIdStatic implements TradeIdStatic<ConcreteTradeId> {
	public capture(id: ConcreteTradeId): TradeId.Snapshot {
		return id;
	}

	public restore(snapshot: TradeId.Snapshot): ConcreteTradeId {
		return snapshot;
	}
}

export const ConcreteTradeId: TradeIdStatic<ConcreteTradeId> = new ConcreteTradeIdStatic();
