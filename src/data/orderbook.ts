import { BookOrder, BookOrderFactory } from './book-order';
import { HLike } from './h';
import { Side } from './length-action-side';


export interface Orderbook<H extends HLike<H>> {
	[side: Side]: BookOrder<H>[];
	time: number,
}

export namespace Orderbook {
	export interface Snapshot {
		readonly bids: readonly BookOrder.Snapshot[];
		readonly asks: readonly BookOrder.Snapshot[];
		readonly time: number | null;
	}
}

export class OrderbookFactory<H extends HLike<H>> {
	public constructor(
		private bookOrderFactory: BookOrderFactory<H>,
	) { }

	public capture(orderbook: Orderbook<H>): Orderbook.Snapshot {
		return {
			bids: orderbook[Side.BID].map(order => this.bookOrderFactory.capture(order)),
			asks: orderbook[Side.ASK].map(order => this.bookOrderFactory.capture(order)),
			time: Number.isFinite(orderbook.time)
				? orderbook.time
				: null,
		};
	}

	public restore(snapshot: Orderbook.Snapshot): Orderbook<H> {
		return {
			[Side.BID]: snapshot.bids.map(orderSnapshot => this.bookOrderFactory.restore(orderSnapshot)),
			[Side.ASK]: snapshot.asks.map(orderSnapshot => this.bookOrderFactory.restore(orderSnapshot)),
			time: snapshot.time !== null
				? snapshot.time
				: Number.NEGATIVE_INFINITY,
		};
	}

	public copy(orderbook: Orderbook<H>): Orderbook<H> {
		return {
			[Side.BID]: orderbook[Side.BID].map(order => this.bookOrderFactory.copy(order)),
			[Side.ASK]: orderbook[Side.ASK].map(order => this.bookOrderFactory.copy(order)),
			time: orderbook.time,
		};
	}
}
