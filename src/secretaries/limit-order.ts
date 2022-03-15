import { Side } from './side';
import { Length } from './length';
import { Operation } from './operation';
import { HLike, H, HStatic } from './h'


export interface LimitOrder<H extends HLike<H>> {
	readonly price: H;
	readonly quantity: H;
	readonly side: Side;
	readonly length: Length;
	readonly operation: Operation;
}

export namespace LimitOrder {
	export interface MutablePlain<H extends HLike<H>> {
		price: H;
		quantity: H;
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

export class LimitOrderStatic<H extends HLike<H>> {
	public constructor(
		private readonly H: HStatic<H>,
	) { }

	public capture(order: LimitOrder<H>): LimitOrder.Snapshot {
		return {
			price: this.H.capture(order.price),
			quantity: this.H.capture(order.quantity),
			side: order.side,
			length: order.length,
			operation: order.operation,
		}
	}

	public restore(snapshot: LimitOrder.Snapshot): LimitOrder.MutablePlain<H> {
		return {
			price: this.H.restore(snapshot.price),
			quantity: this.H.restore(snapshot.quantity),
			side: snapshot.side,
			length: snapshot.length,
			operation: snapshot.operation,
		}
	}
}
