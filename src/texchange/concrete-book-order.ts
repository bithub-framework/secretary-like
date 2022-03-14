import { HLike, HStatic } from '../context/h';
import { BookOrder, BookOrderStatic } from '../context/book-order';



export interface ConcreteBookOrder<
	ConcreteH extends HLike<ConcreteH>,
	> extends
	BookOrder<ConcreteH> { }


export namespace ConcreteBookOrder {
	export interface MutablePlain<
		ConcreteH extends HLike<ConcreteH>,
		> extends
		BookOrder.MutablePlain<ConcreteH> { }
}


export class ConcreteBookOrderStatic<
	ConcreteH extends HLike<ConcreteH>,
	> implements BookOrderStatic<
	ConcreteH
	>{
	public constructor(
		private ConcreteH: HStatic<ConcreteH>,
	) { }

	capture(order: ConcreteBookOrder<ConcreteH>): BookOrder.Snapshot {
		return {
			price: this.ConcreteH.capture(order.price),
			quantity: this.ConcreteH.capture(order.quantity),
			side: order.side,
		}
	}
	restore(snapshot: BookOrder.Snapshot): ConcreteBookOrder.MutablePlain<ConcreteH> {
		return {
			price: this.ConcreteH.restore(snapshot.price),
			quantity: this.ConcreteH.restore(snapshot.quantity),
			side: snapshot.side,
		}
	}
}
