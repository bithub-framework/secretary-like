import { Side } from './side';
import { Length } from './length';
import { Operation } from './operation';
import { HLike, H } from './h'


export interface LimitOrder<ConcreteH extends HLike<ConcreteH>> {
	readonly price: ConcreteH;
	readonly quantity: ConcreteH;
	readonly side: Side;
	readonly length: Length;
	readonly operation: Operation;
}
export namespace LimitOrder {
	export interface MutablePlain<ConcreteH extends HLike<ConcreteH>> {
		price: ConcreteH;
		quantity: ConcreteH;
		side: Side;
		length: Length;
		operation: Operation;
	}
	export interface Snapshot {
		readonly price: H.Snapshot;
		readonly quantity: H.Snapshot;
		readonly side: Side;
		readonly length: Length;
		readonly operation: Operation;
	}
}
export interface LimitOrderStatic<
	ConcreteH extends HLike<ConcreteH>,
	> {
	capture(order: LimitOrder<ConcreteH>): LimitOrder.Snapshot;
	restore(snapshot: LimitOrder.Snapshot): LimitOrder.MutablePlain<ConcreteH>;
}
