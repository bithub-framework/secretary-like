import { HLike, H, HStatic } from './h';
import { Side } from './side';
export interface BookOrder<H extends HLike<H>> {
    price: H;
    quantity: H;
    side: Side;
}
export declare namespace BookOrder {
    interface Snapshot {
        readonly price: H.Snapshot;
        readonly quantity: H.Snapshot;
        readonly side: Side;
    }
}
export declare class BookOrderStatic<H extends HLike<H>> {
    private H;
    constructor(H: HStatic<H>);
    capture(order: BookOrder<H>): BookOrder.Snapshot;
    restore(snapshot: BookOrder.Snapshot): BookOrder<H>;
    copy(order: BookOrder<H>): BookOrder<H>;
}
