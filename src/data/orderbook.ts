import { BookOrder, BookOrderStatic } from './book-order';
import { HLike, HStatic } from './h';
import { Side } from './side';



export interface Orderbook<H extends HLike<H>> {
	[side: Side]: BookOrder<H>[];
	time: number;
}

export namespace Orderbook {
	export interface Snapshot {
		readonly [side: Side]: readonly BookOrder.Snapshot[];
		readonly time: number | null;
	}
}


export class OrderbookStatic<H extends HLike<H>> {
	private BookOrder = new BookOrderStatic<H>(this.H);

	public constructor(
		private H: HStatic<H>,
	) { }

	public capture(orderbook: Orderbook<H>): Orderbook.Snapshot {
		return {
			[Side.ASK]: orderbook[Side.ASK].map(order => this.BookOrder.capture(order)),
			[Side.BID]: orderbook[Side.BID].map(order => this.BookOrder.capture(order)),
			time: Number.isFinite(orderbook.time)
				? orderbook.time
				: null,
		};
	}

	public restore(snapshot: Orderbook.Snapshot): Orderbook<H> {
		return {
			[Side.ASK]: snapshot[Side.ASK].map(orderSnapshot => this.BookOrder.restore(orderSnapshot)),
			[Side.BID]: snapshot[Side.BID].map(orderSnapshot => this.BookOrder.restore(orderSnapshot)),
			time: snapshot.time !== null
				? snapshot.time
				: Number.NEGATIVE_INFINITY,
		}
	}

	public copy(orderbook: Orderbook<H>): Orderbook<H> {
		return {
			[Side.ASK]: orderbook[Side.ASK].map(order => this.BookOrder.copy(order)),
			[Side.BID]: orderbook[Side.BID].map(order => this.BookOrder.copy(order)),
			time: orderbook.time,
		};
	}
}
