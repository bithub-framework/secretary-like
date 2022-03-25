import { HLike, H, HStatic } from './h';
import { Side } from './side';
export interface BookOrder<H extends HLike<H>> {
    price: H;
    quantity: H;
    side: Side;
}
export declare namespace BookOrder {
    interface Functional<H extends HLike<H>> {
        readonly price: H;
        readonly quantity: H;
        readonly side: Side;
    }
    interface Snapshot {
        readonly price: H.Snapshot;
        readonly quantity: H.Snapshot;
        readonly side: Side;
    }
}
export declare class BookOrderStatic<H extends HLike<H>> {
    private readonly H;
    constructor(H: HStatic<H>);
    capture(order: BookOrder<H>): BookOrder.Snapshot;
    restore(snapshot: BookOrder.Snapshot): BookOrder<H>;
    copy(order: BookOrder<H>): BookOrder<H>;
}
