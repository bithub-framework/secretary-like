import { BookOrderStatic, BookOrderLike } from './book-order';
import { HLike } from './h';
import { Side } from './length-action-side';
import { CompositeDataLike, CompositeDataLikeStatic } from './composite-data';
export declare abstract class OrderbookLike<H extends HLike<H>> implements CompositeDataLike {
    protected bids: BookOrderLike<H>[];
    protected asks: BookOrderLike<H>[];
    time: number;
    abstract toJSON(): unknown;
    abstract toString(): string;
    constructor(source: OrderbookLike.Source<H>, BookOrder: BookOrderStatic<H>);
    side(side: Side): BookOrderLike<H>[];
}
export declare namespace OrderbookLike {
    interface Literal<H extends HLike<H>> {
        bids: BookOrderLike.Source<H>[];
        asks: BookOrderLike.Source<H>[];
        time: number;
    }
    type Source<H extends HLike<H>> = OrderbookLike<H> | Literal<H>;
    interface Snapshot {
        readonly bids: readonly BookOrderLike.Snapshot[];
        readonly asks: readonly BookOrderLike.Snapshot[];
        readonly time: number | null;
    }
}
export declare class OrderbookStatic<H extends HLike<H>> implements CompositeDataLikeStatic<OrderbookLike.Source<H>, OrderbookLike<H>, OrderbookLike.Snapshot> {
    private BookOrder;
    constructor(BookOrder: BookOrderStatic<H>);
    create(source: OrderbookLike.Source<H>): OrderbookLike<H>;
    capture(orderbook: OrderbookLike<H>): OrderbookLike.Snapshot;
    restore(snapshot: OrderbookLike.Snapshot): OrderbookLike<H>;
}
