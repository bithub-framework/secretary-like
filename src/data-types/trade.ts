import { Side } from './length-action-side';
import { HLike, SerializableHStatic } from './h';
import { TradeId } from './trade-id';
import { CompositeDataLike, SerializableStatic } from './composite-data';
import { boundMethod } from 'autobind-decorator';



export abstract class TradeLike<H extends HLike<H>>
	implements CompositeDataLike {
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
