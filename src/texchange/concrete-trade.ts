import { HLike, HStatic } from '../secretaries/h';
import { ConcreteTradeId, ConcreteTradeIdStatic } from './concrete-trade-id';
import { Trade, TradeStatic } from '../secretaries/trade';



export interface ConcreteTrade<
	ConcreteH extends HLike<ConcreteH>,
	> extends Trade<ConcreteH, ConcreteTradeId> { }


export namespace ConcreteTrade {
	export interface MutablePlain<
		ConcreteH extends HLike<ConcreteH>,
		> extends Trade.MutablePlain<ConcreteH, ConcreteTradeId> { }
}


export class ConcreteTradeStatic<
	ConcreteH extends HLike<ConcreteH>,
	> implements TradeStatic<
	ConcreteH,
	ConcreteTradeId
	>{
	public constructor(
		private readonly H: HStatic<ConcreteH>,
		private readonly TradeId: ConcreteTradeIdStatic,
	) { }

	public capture(trade: ConcreteTrade<ConcreteH>): Trade.Snapshot {
		return {
			side: trade.side,
			price: this.H.capture(trade.price),
			quantity: this.H.capture(trade.quantity),
			time: trade.time,
			id: this.TradeId.capture(trade.id),
		}
	}

	public restore(snapshot: Trade.Snapshot): ConcreteTrade.MutablePlain<ConcreteH> {
		return {
			side: snapshot.side,
			price: this.H.restore(snapshot.price),
			quantity: this.H.restore(snapshot.quantity),
			time: snapshot.time,
			id: this.TradeId.restore(snapshot.id),
		}
	}
}
