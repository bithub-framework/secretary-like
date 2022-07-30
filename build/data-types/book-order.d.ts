import { HLike, H, HFactory } from './h';
import { Side } from './length-action-side';
import { CompositeDataLike, CompositeDataFactoryLike } from './composite-data';
export interface BookOrder<H extends HLike<H>> extends BookOrder.Source<H>, CompositeDataLike {
    price: H;
    quantity: H;
    side: Side;
    toJSON(): unknown;
    toString(): string;
}
declare class ConcreteBookOrder<H extends HLike<H>> implements BookOrder<H> {
    private factory;
    price: H;
    quantity: H;
    side: Side;
    constructor(source: BookOrder.Source<H>, factory: BookOrderFactory<H>);
    toJSON(): unknown;
    toString(): string;
}
export declare namespace BookOrder {
    interface Source<H extends HLike<H>> {
        price: H;
        quantity: H;
        side: Side;
    }
    interface Snapshot {
        readonly price: H.Snapshot;
        readonly quantity: H.Snapshot;
        readonly side: Side;
    }
}
export declare class BookOrderFactory<H extends HLike<H>> implements CompositeDataFactoryLike<BookOrder.Source<H>, BookOrder<H>, BookOrder.Snapshot> {
    private hFactory;
    constructor(hFactory: HFactory<H>);
    new(source: BookOrder.Source<H>): ConcreteBookOrder<H>;
    capture(order: BookOrder<H>): BookOrder.Snapshot;
    restore(snapshot: BookOrder.Snapshot): ConcreteBookOrder<H>;
}
export {};
