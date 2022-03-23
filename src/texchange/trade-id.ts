import { TradeId, TradeIdStatic } from '../secretaries/data/trade-id';


export type TexchangeTradeId = number | string;

export class TexchangeTradeIdStatic implements TradeIdStatic<TexchangeTradeId> {
	public capture(id: TexchangeTradeId): TradeId.Snapshot {
		return id;
	}

	public restore(snapshot: TradeId.Snapshot): TexchangeTradeId {
		return snapshot;
	}
}
