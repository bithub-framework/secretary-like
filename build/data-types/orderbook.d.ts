import { BookOrderFactory, BookOrder } from './book-order';
import { HLike } from './h';
import { Side } from './length-action-side';
import { CompositeDataLike, CompositeDataFactoryLike } from './composite-data';
export interface Orderbook<H extends HLike<H>> extends Orderbook.Source<H>, CompositeDataLike {
    [side: Side]: BookOrder<H>[];
    time: number;
    toJSON(): unknown;
    toString(): string;
}
declare class ConcreteOrderbook<H extends HLike<H>> implements Orderbook<H> {
    private factory;
    [side: Side]: BookOrder<H>[];
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
export declare class OrderbookFactory<H extends HLike<H>> implements CompositeDataFactoryLike<Orderbook.Source<H>, Orderbook<H>, Orderbook.Snapshot> {
    private bookOrderFactory;
    constructor(bookOrderFactory: BookOrderFactory<H>);
    new(source: Orderbook.Source<H>): ConcreteOrderbook<H>;
    capture(orderbook: Orderbook<H>): Orderbook.Snapshot;
    restore(snapshot: Orderbook.Snapshot): ConcreteOrderbook<H>;
}
export {};
