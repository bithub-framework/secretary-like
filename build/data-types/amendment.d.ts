import { HLike, H, HFactory } from './h';
import { Length, Side, Action } from './length-action-side';
import { OrderId } from './order-id';
import { OpenOrder, OpenOrderFactory } from './open-order';
import { CompositeDataLike, CompositeDataFactoryLike } from './composite-data';
export interface Amendment<H extends HLike<H>> extends OpenOrder<H>, Amendment.Source<H>, CompositeDataLike {
    newUnfilled: H;
    newPrice: H;
}
declare class ConcreteAmendment<H extends HLike<H>> implements Amendment<H> {
    private factory;
    price: H;
    quantity: H;
    side: Side;
    length: Length;
    action: Action;
    filled: H;
    unfilled: H;
    id: OrderId;
    newUnfilled: H;
    newPrice: H;
    constructor(source: Amendment.Source<H>, factory: AmendmentFactory<H>);
    toJSON(): unknown;
    toString(): string;
}
export declare namespace Amendment {
    interface Source<H extends HLike<H>> extends OpenOrder.Source<H> {
        newUnfilled: H;
        newPrice: H;
    }
    interface Snapshot extends OpenOrder.Snapshot {
        readonly newUnfilled: H.Snapshot;
        readonly newPrice: H.Snapshot;
    }
}
export declare class AmendmentFactory<H extends HLike<H>> implements CompositeDataFactoryLike<Amendment.Source<H>, Amendment<H>, Amendment.Snapshot> {
    private hFactory;
    private openOrderFactory;
    constructor(hFactory: HFactory<H>, openOrderFactory: OpenOrderFactory<H>);
    new(source: Amendment.Source<H>): ConcreteAmendment<H>;
    capture(amendment: Amendment<H>): Amendment.Snapshot;
    restore(snapshot: Amendment.Snapshot): ConcreteAmendment<H>;
}
export {};
