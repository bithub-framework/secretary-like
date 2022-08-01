import { HLike, H, HFactory } from './h';
import { Length, Side, Action } from './length-action-side';
import { OrderId } from './order-id';
import {
	OpenOrder,
	OpenOrderFactory,
} from './open-order';
import { CompositeDataLike, CompositeDataFactoryLike } from './composite-data';


export interface Amendment<H extends HLike<H>> extends
	OpenOrder<H>,
	Amendment.Source<H>,
	CompositeDataLike {
	newUnfilled: H;
	newPrice: H;
}

class ConcreteAmendment<H extends HLike<H>> implements Amendment<H> {
	public price: H;
	public quantity: H;
	public side: Side;
	public length: Length;
	public action: Action;
	public filled: H;
	public unfilled: H;
	public id: OrderId;
	public newUnfilled: H;
	public newPrice: H;

	public constructor(
		source: Amendment.Source<H>,
		private factory: AmendmentFactory<H>,
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
			newPrice: this.newPrice,
			newUnfilled: this.newUnfilled,
		} = source);
	}

	public toJSON(): unknown {
		return this.factory.capture(this);
	}

	public toString(): string {
		return JSON.stringify(this.toJSON());
	}
}


export namespace Amendment {
	export interface Source<H extends HLike<H>> extends OpenOrder.Source<H> {
		newUnfilled: H;
		newPrice: H;
	}

	export interface Snapshot extends OpenOrder.Snapshot {
		readonly newUnfilled: H.Snapshot;
		readonly newPrice: H.Snapshot;
	}
}

export class AmendmentFactory<H extends HLike<H>> implements
	CompositeDataFactoryLike<
	Amendment.Source<H>,
	Amendment<H>,
	Amendment.Snapshot>
{
	public constructor(
		private hFactory: HFactory<H>,
		private openOrderFactory: OpenOrderFactory<H>,
	) { }

	public create(source: Amendment.Source<H>): Amendment<H> {
		return new ConcreteAmendment(source, this);
	}

	public capture(amendment: Amendment<H>): Amendment.Snapshot {
		return {
			...this.openOrderFactory.capture(amendment),
			newUnfilled: this.hFactory.capture(amendment.newUnfilled),
			newPrice: this.hFactory.capture(amendment.newPrice),
		}
	}

	public restore(snapshot: Amendment.Snapshot): Amendment<H> {
		return this.create({
			...this.openOrderFactory.restore(snapshot),
			newUnfilled: this.hFactory.restore(snapshot.newUnfilled),
			newPrice: this.hFactory.restore(snapshot.newPrice),
		});
	}
}
