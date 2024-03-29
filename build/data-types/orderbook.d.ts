import { SerializableBookOrderStatic, BookOrderLike } from './book-order';
import { HLike } from './h';
import { Side } from './pairs';
import { SerializableStatic } from './serializable';
export declare abstract class OrderbookLike<H extends HLike<H>> {
    protected bids: BookOrderLike<H>[];
    protected asks: BookOrderLike<H>[];
    time: number;
    abstract toJSON(): unknown;
    abstract toString(): string;
    constructor(source: OrderbookLike.Source<H>, BookOrder: SerializableBookOrderStatic<H>);
    abstract set(side: Side, orders: BookOrderLike.Source<H>[]): OrderbookLike<H>;
    abstract setTime(time: number): OrderbookLike<H>;
    toLiteral(): OrderbookLike.Literal<H>;
    side(side: Side): BookOrderLike<H>[];
}
export declare namespace OrderbookLike {
    interface Literal<H extends HLike<H>> {
        sides: [
            [
                Side,
                BookOrderLike.Source<H>[]
            ],
            [
                Side,
                BookOrderLike.Source<H>[]
            ]
        ];
        time: number;
    }
    type Source<H extends HLike<H>> = OrderbookLike<H> | Literal<H>;
    interface Snapshot {
        readonly bids: readonly BookOrderLike.Snapshot[];
        readonly asks: readonly BookOrderLike.Snapshot[];
        readonly time: number | null;
    }
}
export interface SerializableOrderbookStatic<H extends HLike<H>> extends SerializableStatic<OrderbookLike.Source<H>, OrderbookLike<H>, OrderbookLike.Snapshot> {
}
export declare class OrderbookStatic<H extends HLike<H>> implements SerializableOrderbookStatic<H> {
    private BookOrder;
    constructor(BookOrder: SerializableBookOrderStatic<H>);
    /**
     * @decorator boundMethod
     */
    create(source: OrderbookLike.Source<H>): OrderbookLike<H>;
    /**
     * @decorator boundMethod
     */
    capture(orderbook: OrderbookLike<H>): OrderbookLike.Snapshot;
    /**
     * @decorator boundMethod
     */
    restore(snapshot: OrderbookLike.Snapshot): OrderbookLike<H>;
}
