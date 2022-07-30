import { HLike, H, HFactory } from './h';
import {
	LimitOrder,
	LimitOrderLike,
	LimitOrderFactory,
} from './limit-order';
import { OrderId } from './order-id';
import { Length, Side, Action } from './length-action-side';
import { CompositeDataLike, CompositeDataFactoryLike } from './composite-data';



export interface OpenOrderLike<H extends HLike<H>> extends
	LimitOrderLike<H>,
	OpenOrder.Source<H>,
	CompositeDataLike {
	filled: H;
	unfilled: H;
	id: OrderId;
}

class OpenOrder<H extends HLike<H>> implements OpenOrderLike<H> {
	public price: H;
	public quantity: H;
	public side: Side;
	public length: Length;
	public action: Action;
	public filled: H;
	public unfilled: H;
	public id: OrderId;

	public constructor(
		source: OpenOrder.Source<H>,
		private factory: OpenOrderFactory<H>,
	) {
		({
			price: this.price,
			quantity: this.quantity,
			side: this.side,
			length: this.length,
			action: this.action,
			filled: this.filled,
			unfilled: this.unfilled,
			id: this.id,
		} = source);
	}

	public toJSON(): unknown {
		return this.factory.capture(this);
	}

	public toString(): string {
		return JSON.stringify(this.toJSON());
	}
}

export namespace OpenOrder {
	export interface Source<H extends HLike<H>> extends LimitOrder.Source<H> {
		filled: H;
		unfilled: H;
		id: OrderId;
	}

	export interface Snapshot extends LimitOrder.Snapshot {
		readonly filled: H.Snapshot;
		readonly unfilled: H.Snapshot;
		readonly id: OrderId;
	}
}

export class OpenOrderFactory<H extends HLike<H>> implements
	CompositeDataFactoryLike<
	OpenOrder.Source<H>,
	OpenOrderLike<H>,
	OpenOrder.Snapshot>
{
	public constructor(
		private hFactory: HFactory<H>,
		private limitOrderFactory: LimitOrderFactory<H>,
	) { }

	public new(source: OpenOrder.Source<H>): OpenOrder<H> {
		return new OpenOrder(source, this);
	}

	public capture(order: OpenOrderLike<H>): OpenOrder.Snapshot {
		return {
			...this.limitOrderFactory.capture(order),
			filled: this.hFactory.capture(order.filled),
			unfilled: this.hFactory.capture(order.unfilled),
			id: order.id,
		};
	}

	public restore(snapshot: OpenOrder.Snapshot): OpenOrder<H> {
		return this.new({
			...this.limitOrderFactory.restore(snapshot),
			filled: this.hFactory.restore(snapshot.filled),
			unfilled: this.hFactory.restore(snapshot.unfilled),
			id: snapshot.id,
		});
	}
}
