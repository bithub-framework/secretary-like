import { BookOrder } from './book-order';
import { HLike, HStatic } from './h';
import { Side } from './side';
export interface Orderbook<H extends HLike<H>> {
    readonly [side: Side]: readonly BookOrder<H>[];
    readonly time: number;
}
export declare namespace Orderbook {
    interface MutablePlain<H extends HLike<H>> {
        [side: Side]: BookOrder.MutablePlain<H>[];
        time: number;
    }
    interface Snapshot {
        readonly [side: Side]: readonly BookOrder.Snapshot[];
        readonly time: number | null;
    }
}
export declare class ConcreteOrderbookStatic<H extends HLike<H>> {
    private readonly H;
    private readonly BookOrder;
    constructor(H: HStatic<H>);
    capture(orderbook: Orderbook<H>): Orderbook.Snapshot;
    restore(snapshot: Orderbook.Snapshot): Orderbook.MutablePlain<H>;
    copy(orderbook: Orderbook<H>): Orderbook.MutablePlain<H>;
}
