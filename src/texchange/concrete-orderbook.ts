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
	private readonly BookOrder: ConcreteBookOrderStatic<ConcreteH>;

	public constructor(
		private readonly H: HStatic<ConcreteH>,
	) {
		this.BookOrder = new ConcreteBookOrderStatic(this.H);
	}

	public capture(orderbook: ConcreteOrderbook<ConcreteH>): Orderbook.Snapshot {
		return {
			[Side.ASK]: orderbook[Side.ASK].map(this.BookOrder.capture),
			[Side.BID]: orderbook[Side.BID].map(this.BookOrder.capture),
			time: Number.isFinite(orderbook.time) ? orderbook.time : null,
		};
	}

	public restore(snapshot: Orderbook.Snapshot): ConcreteOrderbook.MutablePlain<ConcreteH> {
		return {
			[Side.ASK]: snapshot[Side.ASK].map(this.BookOrder.restore),
			[Side.BID]: snapshot[Side.BID].map(this.BookOrder.restore),
			time: snapshot.time !== null ? snapshot.time : Number.NEGATIVE_INFINITY,
		}
	}
}
