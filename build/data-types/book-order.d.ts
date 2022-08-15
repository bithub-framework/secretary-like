import { HLike, HLikeStatic } from './h';
import { Side } from './length-action-side';
import { CompositeDataLike, CompositeDataLikeStatic } from './composite-data';
export declare abstract class BookOrderLike<H extends HLike<H>> implements CompositeDataLike {
    price: H;
    quantity: H;
    side: Side;
    abstract toJSON(): unknown;
    abstract toString(): string;
    constructor(source: BookOrderLike.Source<H>, H: HLikeStatic<H>);
}
export declare namespace BookOrderLike {
    interface Literal<H extends HLike<H>> {
        price: HLike.Source<H>;
        quantity: HLike.Source<H>;
        side: Side;
    }
    type Source<H extends HLike<H>> = BookOrderLike<H> | Literal<H>;
    interface Snapshot {
        readonly price: HLike.Snapshot;
        readonly quantity: HLike.Snapshot;
        readonly side: Side;
    }
}
export declare class BookOrderStatic<H extends HLike<H>> implements CompositeDataLikeStatic<BookOrderLike.Source<H>, BookOrderLike<H>, BookOrderLike.Snapshot> {
    private H;
    constructor(H: HLikeStatic<H>);
    create(source: BookOrderLike.Source<H>): BookOrderLike<H>;
    capture(order: BookOrderLike<H>): BookOrderLike.Snapshot;
    restore(snapshot: BookOrderLike.Snapshot): BookOrderLike<H>;
}
