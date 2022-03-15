import { TradeId, TradeIdStatic } from '../secretaries/trade-id';


export type TechangeTradeId = number | string;

export class TexchangeTradeIdStatic implements TradeIdStatic<TechangeTradeId> {
	public capture(id: TechangeTradeId): TradeId.Snapshot {
		return id;
	}

	public restore(snapshot: TradeId.Snapshot): TechangeTradeId {
		return snapshot;
	}
}
