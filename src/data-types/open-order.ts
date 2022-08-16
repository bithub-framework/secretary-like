import { HLike, SerializableHStatic } from './h';
import { LimitOrderLike } from './limit-order';
import { OrderId } from './order-id';
import { Length, Side, Action } from './pairs';
import { SerializableStatic } from './serializable';
import { boundMethod } from 'autobind-decorator';



export abstract class OpenOrderLike<H extends HLike<H>>
	extends LimitOrderLike<H>
{
	public filled: H;
	public unfilled: H;
	public id: OrderId;

	public constructor(
		source: OpenOrderLike.Source<H>,
		H: SerializableHStatic<H>,
	) {
		super(
			source,
			H,
		);
		this.filled = H.create(source.filled);
		this.unfilled = H.create(source.unfilled);
		this.id = source.id;
	}

	public abstract setFilled(filled: HLike.Source<H>): OpenOrderLike<H>;
	public abstract setUnfilled(unfilled: HLike.Source<H>): OpenOrderLike<H>;
	public abstract setId(id: OrderId): OpenOrderLike<H>;

	public toLiteral(): OpenOrderLike.Literal<H> {
		return {
			...super.toLiteral(),
			filled: this.filled,
			unfilled: this.unfilled,
			id: this.id,
		}
	}
}


export namespace OpenOrderLike {
	export interface Literal<H extends HLike<H>> extends LimitOrderLike.Literal<H> {
		filled: HLike.Source<H>;
		unfilled: HLike.Source<H>;
		id: OrderId;
	}
	export type Source<H extends HLike<H>> = OpenOrder<H> | Literal<H>;

	export interface Snapshot extends LimitOrderLike.Snapshot {
		readonly filled: HLike.Snapshot;
		readonly unfilled: HLike.Snapshot;
		readonly id: OrderId;
	}
}


export interface SerializableOpenOrderStatic<H extends HLike<H>>
	extends SerializableStatic<
	OpenOrderLike.Source<H>,
	OpenOrderLike<H>,
	OpenOrderLike.Snapshot
	> { }


class OpenOrder<H extends HLike<H>> extends OpenOrderLike<H> {
	public constructor(
		source: OpenOrderLike.Source<H>,
		private OpenOrder: OpenOrderStatic<H>,
		H: SerializableHStatic<H>,
	) {
		super(
			source,
			H,
		);
	}

	public setPrice(price: HLike.Source<H>): OpenOrderLike<H> {
		return this.OpenOrder.create({
			...this.toLiteral(),
			price,
		});
	}

	public setQuantity(quantity: HLike.Source<H>): OpenOrderLike<H> {
		return this.OpenOrder.create({
			...this.toLiteral(),
			quantity,
		});
	}

	public setLength(length: Length): OpenOrderLike<H> {
		return this.OpenOrder.create({
			...this.toLiteral(),
			length,
		});
	}

	public setSide(side: Side): OpenOrderLike<H> {
		return this.OpenOrder.create({
			...this.toLiteral(),
			side,
		});
	}

	public setAction(action: Action): OpenOrderLike<H> {
		return this.OpenOrder.create({
			...this.toLiteral(),
			action,
		});
	}

	public setFilled(filled: HLike.Source<H>): OpenOrderLike<H> {
		return this.OpenOrder.create({
			...this.toLiteral(),
			filled,
		});
	}

	public setUnfilled(unfilled: HLike.Source<H>): OpenOrderLike<H> {
		return this.OpenOrder.create({
			...this.toLiteral(),
			unfilled,
		});
	}

	public setId(id: OrderId): OpenOrderLike<H> {
		return this.OpenOrder.create({
			...this.toLiteral(),
			id,
		});
	}

	public toJSON(): unknown {
		return this.OpenOrder.capture(this);
	}

	public toString(): string {
		return JSON.stringify(this.toJSON());
	}
}



export class OpenOrderStatic<H extends HLike<H>>
	implements SerializableOpenOrderStatic<H>
{
	public constructor(
		private H: SerializableHStatic<H>,
	) { }

	@boundMethod
	public create(source: OpenOrderLike.Source<H>): OpenOrderLike<H> {
		return new OpenOrder(
			source,
			this,
			this.H,
		);
	}

	@boundMethod
	public capture(order: OpenOrderLike<H>): OpenOrderLike.Snapshot {
		return {
			price: this.H.capture(order.price),
			quantity: this.H.capture(order.quantity),
			side: order.side,
			length: order.length,
			action: order.action,
			filled: this.H.capture(order.filled),
			unfilled: this.H.capture(order.unfilled),
			id: order.id,
		};
	}

	@boundMethod
	public restore(snapshot: OpenOrderLike.Snapshot): OpenOrderLike<H> {
		return this.create({
			price: this.H.restore(snapshot.price),
			quantity: this.H.restore(snapshot.quantity),
			side: snapshot.side,
			length: snapshot.length,
			action: snapshot.action,
			filled: this.H.restore(snapshot.filled),
			unfilled: this.H.restore(snapshot.unfilled),
			id: snapshot.id,
		});
	}
}
