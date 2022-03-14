import { BookOrder } from './book-order';
import { HLike } from './h';
import { Side } from './side';


export interface Orderbook<
	ConcreteH extends HLike<ConcreteH>,
	> {
	readonly [side: Side]: readonly BookOrder<ConcreteH>[];
	readonly time: number;
}

export namespace Orderbook {
	export interface MutablePlain<
		ConcreteH extends HLike<ConcreteH>,
		> {
		[side: Side]: BookOrder.MutablePlain<ConcreteH>[];
		time: number;
	}
	export interface Snapshot {
		readonly [side: Side]: readonly BookOrder.Snapshot[];
		readonly time: number;
	}
}

export interface OrderbookStatic<
	ConcreteH extends HLike<ConcreteH>,
	> {
	capture(orderbook: Orderbook<ConcreteH>): Orderbook.Snapshot;
	restore(snapshot: Orderbook.Snapshot): Orderbook.MutablePlain<ConcreteH>;
}
