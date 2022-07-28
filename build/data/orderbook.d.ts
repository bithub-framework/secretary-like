import { BookOrder, BookOrderFactory } from './book-order';
import { HLike } from './h';
import { Side } from './length-action-side';
export interface Orderbook<H extends HLike<H>> {
    [side: Side]: BookOrder<H>[];
    time: number;
}
export declare namespace Orderbook {
    interface Snapshot {
        readonly bids: readonly BookOrder.Snapshot[];
        readonly asks: readonly BookOrder.Snapshot[];
        readonly time: number | null;
    }
}
export declare class OrderbookFactory<H extends HLike<H>> {
    private bookOrderFactory;
    constructor(bookOrderFactory: BookOrderFactory<H>);
    capture(orderbook: Orderbook<H>): Orderbook.Snapshot;
    restore(snapshot: Orderbook.Snapshot): Orderbook<H>;
    copy(orderbook: Orderbook<H>): Orderbook<H>;
}
