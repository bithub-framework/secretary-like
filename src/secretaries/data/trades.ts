import { HLike, H, HStatic } from './h';
import { Trade, TradeStatic } from './trade';
import { TradeIdStatic } from './trade-id';


export type Trades<H extends HLike<H>, TradeId>
	= Trade<H, TradeId>[];

export namespace Trades {
	export type Functional<H extends HLike<H>, TradeId>
		= readonly Trade<H, TradeId>[];

	export type Snapshot = readonly Trade.Snapshot[];
}


export class TradesStatic<H extends HLike<H>, TradeId> {
	private readonly Trade = new TradeStatic(this.H, this.TradeId);

	public constructor(
		private readonly H: HStatic<H>,
		private readonly TradeId: TradeIdStatic<TradeId>,
	) { }

	public capture(trades: Trades<H, TradeId>): Trades.Snapshot {
		return trades.map(
			trade => this.Trade.capture(trade),
		);
	}

	public restore(snapshot: Trades.Snapshot): Trades<H, TradeId> {
		return snapshot.map(
			tradeSnapshot => this.Trade.restore(tradeSnapshot),
		);
	}

	public copy(trades: Trades<H, TradeId>): Trades<H, TradeId> {
		return trades.map(
			trade => this.Trade.copy(trade),
		);
	}
}
