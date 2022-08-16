import { HLike, SerializableHStatic } from './h';
import { Side } from './pairs';
import { SerializableStatic } from './serializable';
export declare abstract class BookOrderLike<H extends HLike<H>> {
    price: H;
    quantity: H;
    side: Side;
    abstract toJSON(): unknown;
    abstract toString(): string;
    constructor(source: BookOrderLike.Source<H>, H: SerializableHStatic<H>);
    abstract setPrice(price: HLike.Source<H>): BookOrderLike<H>;
    abstract setQuantity(quantity: HLike.Source<H>): BookOrderLike<H>;
    abstract setSide(side: Side): BookOrderLike<H>;
    toLiteral(): BookOrderLike.Literal<H>;
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
    create(source: BookOrderLike.Source<H>): BookOrderLike<H>;
    capture(order: BookOrderLike<H>): BookOrderLike.Snapshot;
    restore(snapshot: BookOrderLike.Snapshot): BookOrderLike<H>;
}
