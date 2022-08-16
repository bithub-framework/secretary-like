import { HLike, HLikeStatic } from './h';
import {
	LimitOrderLike,
	LimitOrderStatic,
} from './limit-order';
import { OrderId } from './order-id';
import {
	CompositeDataLike,
	CompositeDataLikeStatic,
} from './composite-data';
import { boundMethod } from 'autobind-decorator';



export abstract class OpenOrderLike<H extends HLike<H>>
	extends LimitOrderLike<H>
	implements CompositeDataLike {
	public filled: H;
	public unfilled: H;
	public id: OrderId;

	public constructor(
		source: OpenOrderLike.Source<H>,
		H: HLikeStatic<H>,
	) {
		super(
			source,
			H,
		);
		this.filled = H.create(source.filled);
		this.unfilled = H.create(source.unfilled);
		this.id = source.id;
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



class OpenOrder<H extends HLike<H>> extends OpenOrderLike<H> {
	public constructor(
		source: OpenOrderLike.Source<H>,
		private OpenOrder: OpenOrderStatic<H>,
		H: HLikeStatic<H>,
	) {
		super(
			source,
			H,
		);
	}

	public toJSON(): unknown {
		return this.OpenOrder.capture(this);
	}

	public toString(): string {
		return JSON.stringify(this.toJSON());
	}
}



export class OpenOrderStatic<H extends HLike<H>> implements
	CompositeDataLikeStatic<
	OpenOrderLike.Source<H>,
	OpenOrderLike<H>,
	OpenOrderLike.Snapshot>
{
	public constructor(
		private H: HLikeStatic<H>,
	) { }

	/**
	 * @decorator boundMethod
	 */
	@boundMethod
	public create(source: OpenOrderLike.Source<H>): OpenOrderLike<H> {
		return new OpenOrder(
			source,
			this,
			this.H,
		);
	}

	/**
	 * @decorator boundMethod
	 */
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

	/**
	 * @decorator boundMethod
	 */
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
