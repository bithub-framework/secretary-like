import { HLike, HStatic } from '../secretaries/h';
import { BookOrder, BookOrderStatic } from '../secretaries/book-order';



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
		private readonly H: HStatic<ConcreteH>,
	) { }

	public capture(order: ConcreteBookOrder<ConcreteH>): BookOrder.Snapshot {
		return {
			price: this.H.capture(order.price),
			quantity: this.H.capture(order.quantity),
			side: order.side,
		}
	}

	public restore(snapshot: BookOrder.Snapshot): ConcreteBookOrder.MutablePlain<ConcreteH> {
		return {
			price: this.H.restore(snapshot.price),
			quantity: this.H.restore(snapshot.quantity),
			side: snapshot.side,
		}
	}
}
