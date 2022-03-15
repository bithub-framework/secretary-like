import { BookOrder, BookOrderStatic } from './book-order';
import { HLike, HStatic } from './h';
import { Side } from './side';


export interface Orderbook<H extends HLike<H>> {
	readonly [side: Side]: readonly BookOrder<H>[];
	readonly time: number;
}

export namespace Orderbook {
	export interface MutablePlain<H extends HLike<H>
		> {
		[side: Side]: BookOrder.MutablePlain<H>[];
		time: number;
	}

	export interface Snapshot {
		readonly [side: Side]: readonly BookOrder.Snapshot[];
		readonly time: number | null;
	}
}


export class ConcreteOrderbookStatic<H extends HLike<H>> {
	private readonly BookOrder = new BookOrderStatic<H>(this.H);

	public constructor(
		private readonly H: HStatic<H>,
	) { }

	public capture(orderbook: Orderbook<H>): Orderbook.Snapshot {
		return {
			[Side.ASK]: orderbook[Side.ASK].map(this.BookOrder.capture),
			[Side.BID]: orderbook[Side.BID].map(this.BookOrder.capture),
			time: Number.isFinite(orderbook.time)
				? orderbook.time
				: null,
		};
	}

	public restore(snapshot: Orderbook.Snapshot): Orderbook.MutablePlain<H> {
		return {
			[Side.ASK]: snapshot[Side.ASK].map(this.BookOrder.restore),
			[Side.BID]: snapshot[Side.BID].map(this.BookOrder.restore),
			time: snapshot.time !== null
				? snapshot.time
				: Number.NEGATIVE_INFINITY,
		}
	}
}
