import { HLike } from '../context/h';
import { Orderbook, OrderbookStatic } from '../context/orderbook';
import { ConcreteBookOrderStatic } from './concrete-book-order';
import { Side } from '../context/side';



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
	public constructor(
		private ConcreteBookOrder: ConcreteBookOrderStatic<ConcreteH>,
	) { }

	capture(orderbook: ConcreteOrderbook<ConcreteH>): Orderbook.Snapshot {
		return {
			[Side.ASK]: orderbook[Side.ASK].map(this.ConcreteBookOrder.capture),
			[Side.BID]: orderbook[Side.BID].map(this.ConcreteBookOrder.capture),
			time: orderbook.time,
		};
	}

	restore(snapshot: Orderbook.Snapshot): ConcreteOrderbook.MutablePlain<ConcreteH> {
		return {
			[Side.ASK]: snapshot[Side.ASK].map(this.ConcreteBookOrder.restore),
			[Side.BID]: snapshot[Side.BID].map(this.ConcreteBookOrder.restore),
			time: snapshot.time,
		}
	}
}
