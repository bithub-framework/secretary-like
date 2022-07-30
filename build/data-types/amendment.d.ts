import { HLike, H, HFactory } from './h';
import { OpenOrder, OpenOrderFactory } from './open-order';
import { CompositeDataLike, CompositeDataFactoryLike } from './composite-data';
export interface Amendment<H extends HLike<H>> extends OpenOrder<H>, Amendment.Source<H>, CompositeDataLike {
    newUnfilled: H;
    newPrice: H;
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
    new(source: Amendment.Source<H>): Amendment<H>;
    capture(amendment: Amendment<H>): Amendment.Snapshot;
    restore(snapshot: Amendment.Snapshot): Amendment<H>;
}
