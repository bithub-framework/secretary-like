import { BookOrder, BookOrderStatic } from './book-order';
import { HLike, HStatic } from './h';
import { Side } from './length-action-side';


export class Orderbook<H extends HLike<H>> {
	public get(side: Side): BookOrder<H>[] {
		if (side === Side.BID) return this.bids;
		else return this.asks;
	}
	public set(side: Side, orders: BookOrder<H>[]): void {
		if (side === Side.BID) this.bids = orders;
		else this.asks = orders;
	}

	public constructor(
		private bids: BookOrder<H>[],
		private asks: BookOrder<H>[],
		public time: number,
	) { }
}

export namespace Orderbook {
	export interface Snapshot {
		readonly bids: readonly BookOrder.Snapshot[];
		readonly asks: readonly BookOrder.Snapshot[];
		readonly time: number | null;
	}
}

export class OrderbookStatic<H extends HLike<H>> {
	private BookOrder = new BookOrderStatic<H>(this.H);

	public constructor(
		private H: HStatic<H>,
	) { }

	public captureOrderbook(orderbook: Orderbook<H>): Orderbook.Snapshot {
		return {
			bids: orderbook.get(Side.BID).map(order => this.BookOrder.capture(order)),
			asks: orderbook.get(Side.ASK).map(order => this.BookOrder.capture(order)),
			time: Number.isFinite(orderbook.time)
				? orderbook.time
				: null,
		};
	}

	public restoreOrderbook(snapshot: Orderbook.Snapshot): Orderbook<H> {
		return new Orderbook(
			snapshot.bids.map(orderSnapshot => this.BookOrder.restore(orderSnapshot)),
			snapshot.asks.map(orderSnapshot => this.BookOrder.restore(orderSnapshot)),
			snapshot.time !== null
				? snapshot.time
				: Number.NEGATIVE_INFINITY,
		);
	}

	public copyOrderbook(orderbook: Orderbook<H>): Orderbook<H> {
		return new Orderbook(
			orderbook.get(Side.BID).map(order => this.BookOrder.copy(order)),
			orderbook.get(Side.ASK).map(order => this.BookOrder.copy(order)),
			orderbook.time,
		);
	}
}
