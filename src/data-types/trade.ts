import { Side } from './pairs';
import { HLike, SerializableHStatic } from './h';
import { TradeId } from './trade-id';
import { SerializableStatic } from './serializable';
import { boundMethod } from 'autobind-decorator';



export abstract class TradeLike<H extends HLike<H>>
{
	public side: Side;
	public price: H;
	public quantity: H;
	public time: number;
	public id: TradeId;
	public abstract toJSON(): unknown;
	public abstract toString(): string;

	public constructor(
		source: TradeLike.Source<H>,
		H: SerializableHStatic<H>,
	) {
		({
			side: this.side,
			time: this.time,
			id: this.id,
		} = source);
		this.price = H.create(source.price);
		this.quantity = H.create(source.quantity);
	}

	public abstract setPrice(price: HLike.Source<H>): TradeLike<H>;
	public abstract setQuantity(quantity: HLike.Source<H>): TradeLike<H>;
	public abstract setSide(side: Side): TradeLike<H>;
	public abstract setTime(time: number): TradeLike<H>;
	public abstract setId(id: TradeId): TradeLike<H>;

	public toLiteral(): TradeLike.Literal<H> {
		return {
			price: this.price,
			quantity: this.quantity,
			side: this.side,
			time: this.time,
			id: this.id,
		};
	}
}


export namespace TradeLike {
	export interface Literal<H extends HLike<H>> {
		side: Side;
		price: HLike.Source<H>;
		quantity: HLike.Source<H>;
		time: number;
		id: TradeId;
	}
	export type Source<H extends HLike<H>> = TradeLike<H> | Literal<H>;

	export interface Snapshot {
		readonly side: Side;
		readonly price: HLike.Snapshot;
		readonly quantity: HLike.Snapshot;
		readonly time: number;
		readonly id: TradeId;
	}
}


export interface SerializableTradeStatic<H extends HLike<H>>
	extends SerializableStatic<
	TradeLike.Source<H>,
	TradeLike<H>,
	TradeLike.Snapshot
	> { }


class Trade<H extends HLike<H>> extends TradeLike<H> {
	public constructor(
		source: TradeLike.Source<H>,
		private Trade: TradeStatic<H>,
		H: SerializableHStatic<H>,
	) {
		super(
			source,
			H,
		);
	}

	public setPrice(price: HLike.Source<H>): TradeLike<H> {
		return this.Trade.create({
			...this.toLiteral(),
			price,
		});
	}

	public setQuantity(quantity: HLike.Source<H>): TradeLike<H> {
		return this.Trade.create({
			...this.toLiteral(),
			quantity,
		});
	}

	public setSide(side: Side): TradeLike<H> {
		return this.Trade.create({
			...this.toLiteral(),
			side,
		});
	}

	public setTime(time: number): TradeLike<H> {
		return this.Trade.create({
			...this.toLiteral(),
			time,
		});
	}

	public setId(id: TradeId): TradeLike<H> {
		return this.Trade.create({
			...this.toLiteral(),
			id,
		});
	}

	public toJSON(): unknown {
		return this.Trade.capture(this);
	}

	public toString(): string {
		return JSON.stringify(this.toJSON());
	}
}


export class TradeStatic<H extends HLike<H>>
	implements SerializableTradeStatic<H>
{
	public constructor(
		private H: SerializableHStatic<H>,
	) { }

	/**
	 * @decorator boundMethod
	 */
	@boundMethod
	public create(source: TradeLike.Source<H>): TradeLike<H> {
		return new Trade(
			source,
			this,
			this.H,
		);
	}

	/**
	 * @decorator boundMethod
	 */
	@boundMethod
	public capture(trade: TradeLike<H>): TradeLike.Snapshot {
		return {
			side: trade.side,
			price: this.H.capture(trade.price),
			quantity: this.H.capture(trade.quantity),
			time: trade.time,
			id: trade.id,
		}
	}

	/**
	 * @decorator boundMethod
	 */
	@boundMethod
	public restore(snapshot: TradeLike.Snapshot): TradeLike<H> {
		return this.create({
			side: snapshot.side,
			price: this.H.restore(snapshot.price),
			quantity: this.H.restore(snapshot.quantity),
			time: snapshot.time,
			id: snapshot.id,
		});
	}
}
