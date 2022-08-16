import { HLike, SerializableHStatic } from './h';
import { Side } from './length-action-side';
import { CompositeDataLike, SerializableStatic } from './composite-data';
export declare abstract class BookOrderLike<H extends HLike<H>> implements CompositeDataLike {
    price: H;
    quantity: H;
    side: Side;
    abstract toJSON(): unknown;
    abstract toString(): string;
    constructor(source: BookOrderLike.Source<H>, H: SerializableHStatic<H>);
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
export interface SerializableBookOrderStatic<H extends HLike<H>> extends SerializableStatic<BookOrderLike.Source<H>, BookOrderLike<H>, BookOrderLike.Snapshot> {
}
export declare class BookOrderStatic<H extends HLike<H>> implements SerializableBookOrderStatic<H> {
    private H;
    constructor(H: SerializableHStatic<H>);
    /**
     * @decorator boundMethod
     */
    create(source: BookOrderLike.Source<H>): BookOrderLike<H>;
    /**
     * @decorator boundMethod
     */
    capture(order: BookOrderLike<H>): BookOrderLike.Snapshot;
    /**
     * @decorator boundMethod
     */
    restore(snapshot: BookOrderLike.Snapshot): BookOrderLike<H>;
}
