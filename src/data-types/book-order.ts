import { HLike, H, HFactory } from './h';
import { Side } from './length-action-side';


export interface BookOrderLike<H extends HLike<H>> extends BookOrder.Source<H> {
	price: H;
	quantity: H;
	side: Side;
	toJSON(): unknown;
	toString(): string;
}

class BookOrder<H extends HLike<H>> implements BookOrderLike<H> {
	public price: H;
	public quantity: H;
	public side: Side;

	public constructor(
		source: BookOrder.Source<H>,
		private factory: BookOrderFactory<H>,
	) {
		({
			price: this.price,
			quantity: this.quantity,
			side: this.side,
		} = source);
	}

	public toJSON(): unknown {
		return this.factory.capture(this);
	}

	public toString(): string {
		return JSON.stringify(this.toJSON());
	}
}

export namespace BookOrder {
	export interface Source<H extends HLike<H>> {
		price: H;
		quantity: H;
		side: Side;
	}

	export interface Snapshot {
		readonly price: H.Snapshot;
		readonly quantity: H.Snapshot;
		readonly side: Side;
	}
}

export class BookOrderFactory<H extends HLike<H>> {
	public constructor(
		private hFactory: HFactory<H>,
	) { }

	public new(source: BookOrder.Source<H>): BookOrder<H> {
		return new BookOrder(source, this);
	}

	public capture(order: BookOrderLike<H>): BookOrder.Snapshot {
		return {
			price: this.hFactory.capture(order.price),
			quantity: this.hFactory.capture(order.quantity),
			side: order.side,
		}
	}

	public restore(snapshot: BookOrder.Snapshot): BookOrder<H> {
		return this.new({
			price: this.hFactory.restore(snapshot.price),
			quantity: this.hFactory.restore(snapshot.quantity),
			side: snapshot.side,
		});
	}
}
