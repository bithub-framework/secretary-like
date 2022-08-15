import { HLike, HLikeStatic } from './h';
import { Length, Side, Action } from './length-action-side';
import { OrderId } from './order-id';
import {
	OpenOrderLike,
	OpenOrderStatic,
} from './open-order';
import { CompositeDataLike, CompositeDataLikeStatic } from './composite-data';


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
		private OpenOrder: OpenOrderStatic<H>,
	) { }

	public create(source: AmendmentLike.Source<H>): AmendmentLike<H> {
		return new ConcreteAmendment(
			source,
			this,
			this.H,
		);
	}

	public capture(amendment: AmendmentLike<H>): AmendmentLike.Snapshot {
		return {
			...this.OpenOrder.capture(amendment),
			newUnfilled: this.H.capture(amendment.newUnfilled),
			newPrice: this.H.capture(amendment.newPrice),
		}
	}

	public restore(snapshot: AmendmentLike.Snapshot): AmendmentLike<H> {
		return this.create({
			...this.OpenOrder.restore(snapshot),
			newUnfilled: this.H.restore(snapshot.newUnfilled),
			newPrice: this.H.restore(snapshot.newPrice),
		});
	}
}
