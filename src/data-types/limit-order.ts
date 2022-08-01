import { Length, Side, Action } from './length-action-side';
import { HLike, H, HFactory } from './h';
import { CompositeDataLike, CompositeDataFactoryLike } from './composite-data';


export interface LimitOrder<H extends HLike<H>>
	extends LimitOrder.Source<H>, CompositeDataLike {
	price: H;
	quantity: H;
	side: Side;
	length: Length;
	action: Action;
	toJSON(): unknown;
	toString(): string;
}

class ConcreteLimitOrder<H extends HLike<H>> implements LimitOrder<H>{
	public price: H;
	public quantity: H;
	public side: Side;
	public length: Length;
	public action: Action;

	public constructor(
		source: LimitOrder.Source<H>,
		private factory: LimitOrderFactory<H>,
		hFactory: HFactory<H>,
	) {
		({
			side: this.side,
			length: this.length,
			action: this.action,
		} = source);
		this.price = hFactory.from(source.price);
		this.quantity = hFactory.from(source.quantity);
	}

	public toJSON(): unknown {
		return this.factory.capture(this);
	}

	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/toString
	// Template string is guaranteed to invoke toString().
	public toString(): string {
		return JSON.stringify(this.toJSON());
	}
}

export namespace LimitOrder {
	export interface Source<H extends HLike<H>> {
		price: H.Source<H>;
		quantity: H.Source<H>;
		side: Side;
		length: Length;
		action: Action;
	}

	export interface Snapshot {
		readonly price: H.Snapshot;
		readonly quantity: H.Snapshot;
		readonly side: Side;
		readonly length: Length;
		readonly action: Action;
	}
}

export class LimitOrderFactory<H extends HLike<H>> implements
	CompositeDataFactoryLike<
	LimitOrder.Source<H>,
	LimitOrder<H>,
	LimitOrder.Snapshot
	>
{
	public constructor(
		private hFactory: HFactory<H>,
	) { }

	public create(source: LimitOrder.Source<H>): LimitOrder<H> {
		return new ConcreteLimitOrder(
			source,
			this,
			this.hFactory,
		);
	}

	public capture(order: LimitOrder<H>): LimitOrder.Snapshot {
		return {
			price: this.hFactory.capture(order.price),
			quantity: this.hFactory.capture(order.quantity),
			side: order.side,
			length: order.length,
			action: order.action,
		}
	}

	public restore(snapshot: LimitOrder.Snapshot): LimitOrder<H> {
		return this.create({
			price: this.hFactory.restore(snapshot.price),
			quantity: this.hFactory.restore(snapshot.quantity),
			side: snapshot.side,
			length: snapshot.length,
			action: snapshot.action,
		});
	}
}
