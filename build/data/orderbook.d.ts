import { BookOrder } from './book-order';
import { HLike, HStatic } from './h';
import { Side } from './length-action-side';
export interface Orderbook<H extends HLike<H>> {
    [side: Side]: BookOrder<H>[];
    time: number;
}
export declare namespace Orderbook {
    interface Snapshot {
        readonly [side: Side]: readonly BookOrder.Snapshot[];
        readonly time: number | null;
    }
}
export declare class OrderbookStatic<H extends HLike<H>> {
    private H;
    private BookOrder;
    constructor(H: HStatic<H>);
    capture(orderbook: Orderbook<H>): Orderbook.Snapshot;
    restore(snapshot: Orderbook.Snapshot): Orderbook<H>;
    copy(orderbook: Orderbook<H>): Orderbook<H>;
}
