import { HLike, H } from './h';
import { Side } from './side';


export interface BookOrder<
	ConcreteH extends HLike<ConcreteH>,
	> {
	readonly price: ConcreteH;
	readonly quantity: ConcreteH;
	readonly side: Side,
}

export namespace BookOrder {
	export interface MutablePlain<
		ConcreteH extends HLike<ConcreteH>,
		> {
		price: ConcreteH;
		quantity: ConcreteH;
		side: Side,
	}
	export interface Snapshot {
		readonly price: H.Snapshot;
		readonly quantity: H.Snapshot;
		readonly side: Side;
	}
}
export interface BookOrderStatic<
	ConcreteH extends HLike<ConcreteH>,
	> {
	capture(order: BookOrder<ConcreteH>): BookOrder.Snapshot;
	restore(snapshot: BookOrder.Snapshot): BookOrder.MutablePlain<ConcreteH>;
}
