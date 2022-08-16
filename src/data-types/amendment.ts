import { HLike, SerializableHStatic } from './h';
import { OpenOrderLike } from './open-order';
import { Length, Side, Action } from './pairs';
import { OrderId } from './order-id';
import { SerializableStatic } from './serializable';
import { boundMethod } from 'autobind-decorator';



export abstract class AmendmentLike<H extends HLike<H>>
	extends OpenOrderLike<H>
{
	public newUnfilled: H;
	public newPrice: H;

	public constructor(
		source: AmendmentLike.Source<H>,
		H: SerializableHStatic<H>,
	) {
		super(
			source,
			H,
		);
		this.newPrice = H.create(source.newPrice);
		this.newUnfilled = H.create(source.newUnfilled);
	}

	public abstract setNewPrice(newPrice: HLike.Source<H>): AmendmentLike<H>;
	public abstract setNewUnfilled(newUnfilled: HLike.Source<H>): AmendmentLike<H>;

	public toLiteral(): AmendmentLike.Literal<H> {
		return {
			...super.toLiteral(),
			newPrice: this.newPrice,
			newUnfilled: this.newUnfilled,
		}
	}
}


export namespace AmendmentLike {
	export interface Literal<H extends HLike<H>> extends OpenOrderLike.Literal<H> {
		newUnfilled: HLike.Source<H>;
		newPrice: HLike.Source<H>;
	}
	export type Source<H extends HLike<H>> = AmendmentLike<H> | Literal<H>;

	export interface Snapshot extends OpenOrderLike.Snapshot {
		readonly newUnfilled: HLike.Snapshot;
		readonly newPrice: HLike.Snapshot;
	}
}


export interface SerializableAmendmentStatic<H extends HLike<H>>
	extends SerializableStatic
	<
	AmendmentLike.Source<H>,
	AmendmentLike<H>,
	AmendmentLike.Snapshot
	> { }


class Amendment<H extends HLike<H>> extends AmendmentLike<H> {
	public constructor(
		source: AmendmentLike.Source<H>,
		private Amendment: AmendmentStatic<H>,
		H: SerializableHStatic<H>,
	) {
		super(
			source,
			H,
		);
	}

	public setPrice(price: HLike.Source<H>): AmendmentLike<H> {
		return this.Amendment.create({
			...this.toLiteral(),
			price,
		});
	}

	public setQuantity(quantity: HLike.Source<H>): AmendmentLike<H> {
		return this.Amendment.create({
			...this.toLiteral(),
			quantity,
		});
	}

	public setLength(length: Length): AmendmentLike<H> {
		return this.Amendment.create({
			...this.toLiteral(),
			length,
		});
	}

	public setSide(side: Side): AmendmentLike<H> {
		return this.Amendment.create({
			...this.toLiteral(),
			side,
		});
	}

	public setAction(action: Action): AmendmentLike<H> {
		return this.Amendment.create({
			...this.toLiteral(),
			action,
		});
	}

	public setFilled(filled: HLike.Source<H>): AmendmentLike<H> {
		return this.Amendment.create({
			...this.toLiteral(),
			filled,
		});
	}

	public setUnfilled(unfilled: HLike.Source<H>): AmendmentLike<H> {
		return this.Amendment.create({
			...this.toLiteral(),
			unfilled,
		});
	}

	public setId(id: OrderId): AmendmentLike<H> {
		return this.Amendment.create({
			...this.toLiteral(),
			id,
		});
	}

	public setNewPrice(newPrice: HLike.Source<H>): AmendmentLike<H> {
		return this.Amendment.create({
			...this.toLiteral(),
			newPrice,
		});
	}

	public setNewUnfilled(newUnfilled: HLike.Source<H>): AmendmentLike<H> {
		return this.Amendment.create({
			...this.toLiteral(),
			newUnfilled,
		});
	}

	public toJSON(): unknown {
		return this.Amendment.capture(this);
	}

	public toString(): string {
		return JSON.stringify(this.toJSON());
	}
}


export class AmendmentStatic<H extends HLike<H>>
	implements SerializableAmendmentStatic<H>
{
	public constructor(
		private H: SerializableHStatic<H>,
	) { }

	@boundMethod
	public create(source: AmendmentLike.Source<H>): AmendmentLike<H> {
		return new Amendment(
			source,
			this,
			this.H,
		);
	}

	@boundMethod
	public capture(amendment: AmendmentLike<H>): AmendmentLike.Snapshot {
		return {
			price: this.H.capture(amendment.price),
			quantity: this.H.capture(amendment.quantity),
			side: amendment.side,
			length: amendment.length,
			action: amendment.action,
			filled: this.H.capture(amendment.filled),
			unfilled: this.H.capture(amendment.unfilled),
			id: amendment.id,
			newUnfilled: this.H.capture(amendment.newUnfilled),
			newPrice: this.H.capture(amendment.newPrice),
		}
	}

	@boundMethod
	public restore(snapshot: AmendmentLike.Snapshot): AmendmentLike<H> {
		return this.create({
			price: this.H.restore(snapshot.price),
			quantity: this.H.restore(snapshot.quantity),
			side: snapshot.side,
			length: snapshot.length,
			action: snapshot.action,
			filled: this.H.restore(snapshot.filled),
			unfilled: this.H.restore(snapshot.unfilled),
			id: snapshot.id,
			newUnfilled: this.H.restore(snapshot.newUnfilled),
			newPrice: this.H.restore(snapshot.newPrice),
		});
	}
}
