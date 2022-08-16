import { HLike, SerializableHStatic } from './h';
import { Side } from './pairs';
import { SerializableStatic } from './serializable';
import { boundMethod } from 'autobind-decorator';



export abstract class BookOrderLike<H extends HLike<H>>
{
	public price: H;
	public quantity: H;
	public side: Side;
	public abstract toJSON(): unknown;
	public abstract toString(): string;

	public constructor(
		source: BookOrderLike.Source<H>,
		H: SerializableHStatic<H>,
	) {
		this.price = H.create(source.price);
		this.quantity = H.create(source.quantity);
		this.side = source.side;
	}

	public abstract setPrice(price: HLike.Source<H>): BookOrderLike<H>;
	public abstract setQuantity(quantity: HLike.Source<H>): BookOrderLike<H>;
	public abstract setSide(side: Side): BookOrderLike<H>;

	public toLiteral(): BookOrderLike.Literal<H> {
		return {
			price: this.price,
			quantity: this.quantity,
			side: this.side,
		}
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


export interface SerializableBookOrderStatic<H extends HLike<H>>
	extends SerializableStatic
	<
	BookOrderLike.Source<H>,
	BookOrderLike<H>,
	BookOrderLike.Snapshot
	> { }


class BookOrder<H extends HLike<H>> extends BookOrderLike<H> {
	public constructor(
		source: BookOrderLike.Source<H>,
		private BookOrder: BookOrderStatic<H>,
		H: SerializableHStatic<H>,
	) {
		super(
			source,
			H,
		);
	}

	public setPrice(price: HLike.Source<H>): BookOrderLike<H> {
		return this.BookOrder.create({
			...this.toLiteral(),
			price,
		});
	}

	public setQuantity(quantity: HLike.Source<H>): BookOrderLike<H> {
		return this.BookOrder.create({
			...this.toLiteral(),
			quantity,
		});
	}

	public setSide(side: Side): BookOrderLike<H> {
		return this.BookOrder.create({
			...this.toLiteral(),
			side,
		});
	}

	public toJSON(): unknown {
		return this.BookOrder.capture(this);
	}

	public toString(): string {
		return JSON.stringify(this.toJSON());
	}
}


export class BookOrderStatic<H extends HLike<H>>
	implements SerializableBookOrderStatic<H>
{
	public constructor(
		private H: SerializableHStatic<H>,
	) { }

	@boundMethod
	public create(source: BookOrderLike.Source<H>): BookOrderLike<H> {
		return new BookOrder(
			source,
			this,
			this.H,
		);
	}

	@boundMethod
	public capture(order: BookOrderLike<H>): BookOrderLike.Snapshot {
		return {
			price: this.H.capture(order.price),
			quantity: this.H.capture(order.quantity),
			side: order.side,
		}
	}

	@boundMethod
	public restore(snapshot: BookOrderLike.Snapshot): BookOrderLike<H> {
		return this.create({
			price: this.H.restore(snapshot.price),
			quantity: this.H.restore(snapshot.quantity),
			side: snapshot.side,
		});
	}
}
