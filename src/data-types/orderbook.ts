import {
	SerializableBookOrderStatic,
	BookOrderLike,
} from './book-order';
import { HLike } from './h';
import { Side, BID, ASK } from './length-action-side';
import { SerializableStatic } from './serializable';
import { boundMethod } from 'autobind-decorator';
import assert = require('assert');



export abstract class OrderbookLike<H extends HLike<H>>
{
	protected bids: BookOrderLike<H>[];
	protected asks: BookOrderLike<H>[];
	public time: number;
	public abstract toJSON(): unknown;
	public abstract toString(): string;

	public constructor(
		source: OrderbookLike.Source<H>,
		BookOrder: SerializableBookOrderStatic<H>,
	) {
		if (source instanceof OrderbookLike) {
			this.bids = source.side(BID);
			this.asks = source.side(ASK);
		} else {
			assert(source.sides[0][0] !== source.sides[1][0]);
			if (source.sides[0][0] === BID) {
				this.bids = source.sides[0][1].map(BookOrder.create);
				this.asks = source.sides[1][1].map(BookOrder.create);
			} else {
				this.bids = source.sides[1][1].map(BookOrder.create);
				this.asks = source.sides[0][1].map(BookOrder.create);
			}
		}
		this.time = source.time;
	}

	public side(side: Side): BookOrderLike<H>[] {
		return side === BID ? this.bids : this.asks;
	}
}


export namespace OrderbookLike {
	export interface Literal<H extends HLike<H>> {
		sides: [
			[Side, BookOrderLike.Source<H>[]],
			[Side, BookOrderLike.Source<H>[]],
		];
		time: number;
	}
	export type Source<H extends HLike<H>> = OrderbookLike<H> | Literal<H>;

	export interface Snapshot {
		readonly bids: readonly BookOrderLike.Snapshot[];
		readonly asks: readonly BookOrderLike.Snapshot[];
		readonly time: number | null;
	}
}


export interface SerializableOrderbookStatic<H extends HLike<H>>
	extends SerializableStatic
	<
	OrderbookLike.Source<H>,
	OrderbookLike<H>,
	OrderbookLike.Snapshot
	> { }


class Orderbook<H extends HLike<H>> extends OrderbookLike<H> {
	public constructor(
		source: OrderbookLike.Source<H>,
		private Orderbook: OrderbookStatic<H>,
		BookOrder: SerializableBookOrderStatic<H>,
	) {
		super(
			source,
			BookOrder,
		);
	}

	public toJSON(): unknown {
		return this.Orderbook.capture(this);
	}

	public toString(): string {
		return JSON.stringify(this.toJSON());
	}
}


export class OrderbookStatic<H extends HLike<H>>
	implements SerializableOrderbookStatic<H>
{
	public constructor(
		private BookOrder: SerializableBookOrderStatic<H>,
	) { }

	/**
	 * @decorator boundMethod
	 */
	@boundMethod
	public create(source: OrderbookLike.Source<H>): OrderbookLike<H> {
		return new Orderbook(
			source,
			this,
			this.BookOrder,
		);
	}

	/**
	 * @decorator boundMethod
	 */
	@boundMethod
	public capture(orderbook: OrderbookLike<H>): OrderbookLike.Snapshot {
		return {
			bids: orderbook.side(BID).map(this.BookOrder.capture),
			asks: orderbook.side(ASK).map(this.BookOrder.capture),
			time: Number.isFinite(orderbook.time)
				? orderbook.time
				: null,
		};
	}

	/**
	 * @decorator boundMethod
	 */
	@boundMethod
	public restore(snapshot: OrderbookLike.Snapshot): OrderbookLike<H> {
		return this.create({
			sides: [
				[BID, snapshot.bids.map(this.BookOrder.restore)],
				[ASK, snapshot.asks.map(this.BookOrder.restore)],
			],
			time: snapshot.time !== null
				? snapshot.time
				: Number.NEGATIVE_INFINITY,
		});
	}
}
