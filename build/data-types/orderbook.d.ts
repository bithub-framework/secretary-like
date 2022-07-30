import { BookOrder, BookOrderFactory, BookOrderLike } from './book-order';
import { HLike } from './h';
import { Side } from './length-action-side';
export interface OrderbookLike<H extends HLike<H>> extends Orderbook.Source<H> {
    [side: Side]: BookOrderLike<H>[];
    time: number;
    toJSON(): unknown;
    toString(): string;
}
declare class Orderbook<H extends HLike<H>> implements OrderbookLike<H> {
    private factory;
    [side: Side]: BookOrderLike<H>[];
    time: number;
    constructor(source: Orderbook.Source<H>, factory: OrderbookFactory<H>, bookOrderFactory: BookOrderFactory<H>);
    toJSON(): unknown;
    toString(): string;
}
export declare namespace Orderbook {
    interface Source<H extends HLike<H>> {
        [side: Side]: BookOrder.Source<H>[];
        time: number;
    }
    interface Snapshot {
        readonly bids: readonly BookOrder.Snapshot[];
        readonly asks: readonly BookOrder.Snapshot[];
        readonly time: number | null;
    }
}
export declare class OrderbookFactory<H extends HLike<H>> {
    private bookOrderFactory;
    constructor(bookOrderFactory: BookOrderFactory<H>);
    new(source: Orderbook.Source<H>): Orderbook<H>;
    capture(orderbook: OrderbookLike<H>): Orderbook.Snapshot;
    restore(snapshot: Orderbook.Snapshot): Orderbook<H>;
}
export {};
