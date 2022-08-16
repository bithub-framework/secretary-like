import { Length, Side, Action } from './length-action-side';
import { HLike, SerializableHStatic } from './h';
import { SerializableStatic } from './serializable';
import { boundMethod } from 'autobind-decorator';


/**
 * typeclass
 */
export abstract class LimitOrderLike<H extends HLike<H>>
{
	public price: H;
	public quantity: H;
	public side: Side;
	public length: Length;
	public action: Action;
	public abstract toJSON(): unknown;
	public abstract toString(): string;

	public constructor(
		source: LimitOrderLike.Source<H>,
		H: SerializableHStatic<H>,
	) {
		({
			side: this.side,
			length: this.length,
			action: this.action,
		} = source);
		this.price = H.create(source.price);
		this.quantity = H.create(source.quantity);
	}
}

/**
 * namespace about typeclass {@link LimitOrderLike}
 */
export namespace LimitOrderLike {
	export interface Literal<H extends HLike<H>> {
		price: HLike.Source<H>;
		quantity: HLike.Source<H>;
		side: Side;
		length: Length;
		action: Action;
	}

	export type Source<H extends HLike<H>> = LimitOrderLike<H> | Literal<H>;

	export interface Snapshot {
		readonly price: HLike.Snapshot;
		readonly quantity: HLike.Snapshot;
		readonly side: Side;
		readonly length: Length;
		readonly action: Action;
	}
}


/**
 * static part of typeclass `SerializableLimitOrder`
 */
export interface SerializableLimitOrderStatic<H extends HLike<H>> extends
	SerializableStatic<
	LimitOrderLike.Source<H>,
	LimitOrderLike<H>,
	LimitOrderLike.Snapshot
	> { }

/**
 * type
 * @sealed
 */
class LimitOrder<H extends HLike<H>> extends LimitOrderLike<H>{
	public constructor(
		source: LimitOrderLike.Source<H>,
		private LimitOrder: LimitOrderStatic<H>,
		H: SerializableHStatic<H>,
	) {
		super(
			source,
			H,
		);
	}

	public toJSON(): unknown {
		return this.LimitOrder.capture(this);
	}

	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/toString
	// Template string is guaranteed to invoke toString().
	public toString(): string {
		return JSON.stringify(this.toJSON());
	}
}

/**
 * static part of type {@link LimitOrder}
 */
export class LimitOrderStatic<H extends HLike<H>>
	implements SerializableLimitOrderStatic<H>
{
	public constructor(
		private H: SerializableHStatic<H>
	) { }

	/**
	 * @decorator boundMethod
	 */
	@boundMethod
	public create(source: LimitOrderLike.Source<H>): LimitOrderLike<H> {
		return new LimitOrder(
			source,
			this,
			this.H,
		);
	}

	/**
	 * @decorator boundMethod
	 */
	@boundMethod
	public capture(order: LimitOrderLike<H>): LimitOrderLike.Snapshot {
		return {
			price: this.H.capture(order.price),
			quantity: this.H.capture(order.quantity),
			side: order.side,
			length: order.length,
			action: order.action,
		}
	}

	/**
	 * @decorator boundMethod
	 */
	@boundMethod
	public restore(snapshot: LimitOrderLike.Snapshot): LimitOrderLike<H> {
		return this.create({
			price: this.H.restore(snapshot.price),
			quantity: this.H.restore(snapshot.quantity),
			side: snapshot.side,
			length: snapshot.length,
			action: snapshot.action,
		});
	}
}
