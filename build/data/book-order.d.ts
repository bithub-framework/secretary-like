import { HLike, H, HFactory } from './h';
import { Side } from './length-action-side';
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
export declare class BookOrderFactory<H extends HLike<H>> {
    private hFactory;
    constructor(hFactory: HFactory<H>);
    capture(order: BookOrder<H>): BookOrder.Snapshot;
    restore(snapshot: BookOrder.Snapshot): BookOrder<H>;
    copy(order: BookOrder<H>): BookOrder<H>;
}
