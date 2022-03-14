import { HLike, HStatic } from '../context/h';
import { ConcreteTradeId, ConcreteTradeIdStatic } from './concrete-trade-id';
import { Trade, TradeStatic } from '../context/trade';



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
		private ConcreteH: HStatic<ConcreteH>,
		private ConcreteTradeId: ConcreteTradeIdStatic,
	) { }

	capture(trade: ConcreteTrade<ConcreteH>): Trade.Snapshot {
		return {
			side: trade.side,
			price: this.ConcreteH.capture(trade.price),
			quantity: this.ConcreteH.capture(trade.quantity),
			time: trade.time,
			id: this.ConcreteTradeId.capture(trade.id),
		}
	}
	restore(snapshot: Trade.Snapshot): ConcreteTrade.MutablePlain<ConcreteH> {
		return {
			side: snapshot.side,
			price: this.ConcreteH.restore(snapshot.price),
			quantity: this.ConcreteH.restore(snapshot.quantity),
			time: snapshot.time,
			id: this.ConcreteTradeId.restore(snapshot.id),
		}
	}
}
