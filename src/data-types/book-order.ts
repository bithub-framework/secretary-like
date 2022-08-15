import { HLike, HLikeStatic } from './h';
import { Side } from './length-action-side';
import { CompositeDataLike, CompositeDataLikeStatic } from './composite-data';


export abstract class BookOrderLike<H extends HLike<H>>
	implements CompositeDataLike {
	public price: H;
	public quantity: H;
	public side: Side;
	public abstract toJSON(): unknown;
	public abstract toString(): string;

	public constructor(
		source: BookOrderLike.Source<H>,
		H: HLikeStatic<H>,
	) {
		this.price = H.create(source.price);
		this.quantity = H.create(source.quantity);
		this.side = source.side;
	}
}


export namespace BookOrderLike {
	export interface Literal<H extends HLike<H>> {
		price: HLike.Source<H>;
		quantity: HLike.Source<H>;
		side: Side;
	}
	export type Source<H extends HLike<H>> = BookOrderLike<H> | Literal<H>;

	export interface Snapshot {
		readonly price: HLike.Snapshot;
		readonly quantity: HLike.Snapshot;
		readonly side: Side;
	}
}


class BookOrder<H extends HLike<H>> extends BookOrderLike<H> {
	public constructor(
		source: BookOrderLike.Source<H>,
		private BookOrder: BookOrderStatic<H>,
		H: HLikeStatic<H>,
	) {
		super(
			source,
			H,
		);
	}

	public toJSON(): unknown {
		return this.BookOrder.capture(this);
	}

	public toString(): string {
		return JSON.stringify(this.toJSON());
	}
}


export class BookOrderStatic<H extends HLike<H>> implements
	CompositeDataLikeStatic<
	BookOrderLike.Source<H>,
	BookOrderLike<H>,
	BookOrderLike.Snapshot>
{
	public constructor(
		private H: HLikeStatic<H>,
	) { }

	public create(source: BookOrderLike.Source<H>): BookOrderLike<H> {
		return new BookOrder(
			source,
			this,
			this.H,
		);
	}

	public capture(order: BookOrderLike<H>): BookOrderLike.Snapshot {
		return {
			price: this.H.capture(order.price),
			quantity: this.H.capture(order.quantity),
			side: order.side,
		}
	}

	public restore(snapshot: BookOrderLike.Snapshot): BookOrderLike<H> {
		return this.create({
			price: this.H.restore(snapshot.price),
			quantity: this.H.restore(snapshot.quantity),
			side: snapshot.side,
		});
	}
}
