import { HLike, H } from './h';
import { OpenOrder } from './open-order';
import { OrderId } from './order-id';



export interface OpenMaker<
	ConcreteH extends HLike<ConcreteH>,
	ConcreteOrderId,
	> extends OpenOrder<ConcreteH, ConcreteOrderId> {
	readonly behind: ConcreteH;
}

export namespace OpenMaker {
	export interface MutablePlain<
		ConcreteH extends HLike<ConcreteH>,
		ConcreteOrderId,
		> extends OpenOrder.MutablePlain<ConcreteH, ConcreteOrderId> {
		behind: ConcreteH;
	}
	export interface Snapshot extends OpenOrder.Snapshot {
		readonly behind: H.Snapshot;
	}
}

export interface OpenMakerStatic<
	ConcreteH extends HLike<ConcreteH>,
	ConcreteOrderId,
	> {
	capture(order: OpenMaker<ConcreteH, ConcreteOrderId>): OpenMaker.Snapshot;
	restore(snapshot: OpenMaker.Snapshot): OpenMaker.MutablePlain<ConcreteH, ConcreteOrderId>;
}
