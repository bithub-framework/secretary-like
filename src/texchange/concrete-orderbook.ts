import { HLike, HStatic } from '../secretaries/h';
import { Orderbook, OrderbookStatic } from '../secretaries/orderbook';
import { ConcreteBookOrderStatic } from './concrete-book-order';
import { Side } from '../secretaries/side';



export interface ConcreteOrderbook<
	ConcreteH extends HLike<ConcreteH>,
	> extends Orderbook<ConcreteH> { }


export namespace ConcreteOrderbook {
	export interface MutablePlain<
		ConcreteH extends HLike<ConcreteH>,
		> extends
		Orderbook.MutablePlain<ConcreteH> { }
}


export class ConcreteOrderbookStatic<
	ConcreteH extends HLike<ConcreteH>,
	> implements OrderbookStatic<
	ConcreteH
	>{
	private ConcreteBookOrder: ConcreteBookOrderStatic<ConcreteH>;

	public constructor(
		private ConcreteH: HStatic<ConcreteH>,
	) {
		this.ConcreteBookOrder = new ConcreteBookOrderStatic(this.ConcreteH);
	}

	capture(orderbook: ConcreteOrderbook<ConcreteH>): Orderbook.Snapshot {
		return {
			[Side.ASK]: orderbook[Side.ASK].map(this.ConcreteBookOrder.capture),
			[Side.BID]: orderbook[Side.BID].map(this.ConcreteBookOrder.capture),
			time: Number.isFinite(orderbook.time) ? orderbook.time : null,
		};
	}

	restore(snapshot: Orderbook.Snapshot): ConcreteOrderbook.MutablePlain<ConcreteH> {
		return {
			[Side.ASK]: snapshot[Side.ASK].map(this.ConcreteBookOrder.restore),
			[Side.BID]: snapshot[Side.BID].map(this.ConcreteBookOrder.restore),
			time: snapshot.time !== null ? snapshot.time : Number.NEGATIVE_INFINITY,
		}
	}
}
