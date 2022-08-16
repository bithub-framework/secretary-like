import { HLike, HLikeStatic } from './h';
import {
	OpenOrderLike,
	OpenOrderStatic,
} from './open-order';
import { CompositeDataLike, CompositeDataLikeStatic } from './composite-data';
import { boundMethod } from 'autobind-decorator';



export abstract class AmendmentLike<H extends HLike<H>>
	extends OpenOrderLike<H>
	implements CompositeDataLike {
	public newUnfilled: H;
	public newPrice: H;

	public constructor(
		source: AmendmentLike.Source<H>,
		H: HLikeStatic<H>,
	) {
		super(
			source,
			H,
		);
		this.newPrice = H.create(source.newPrice);
		this.newUnfilled = H.create(source.newUnfilled);
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


class ConcreteAmendment<H extends HLike<H>> extends AmendmentLike<H> {
	public constructor(
		source: AmendmentLike.Source<H>,
		private Amendment: AmendmentStatic<H>,
		H: HLikeStatic<H>,
	) {
		super(
			source,
			H,
		);
	}

	public toJSON(): unknown {
		return this.Amendment.capture(this);
	}

	public toString(): string {
		return JSON.stringify(this.toJSON());
	}
}


export class AmendmentStatic<H extends HLike<H>> implements
	CompositeDataLikeStatic<
	AmendmentLike.Source<H>,
	AmendmentLike<H>,
	AmendmentLike.Snapshot>
{
	public constructor(
		private H: HLikeStatic<H>,
	) { }

	/**
	 * @decorator boundMethod
	 */
	@boundMethod
	public create(source: AmendmentLike.Source<H>): AmendmentLike<H> {
		return new ConcreteAmendment(
			source,
			this,
			this.H,
		);
	}

	/**
	 * @decorator boundMethod
	 */
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

	/**
	 * @decorator boundMethod
	 */
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
