import { HLike, H, HFactory } from './h';
import { OpenOrder, OpenOrderFactory } from './open-order';
export interface Amendment<H extends HLike<H>> extends OpenOrder<H> {
    newUnfilled: H;
    newPrice: H;
}
export declare namespace Amendment {
    interface Snapshot extends OpenOrder.Snapshot {
        readonly newUnfilled: H.Snapshot;
        readonly newPrice: H.Snapshot;
    }
}
export declare class AmendmentFactory<H extends HLike<H>> {
    private hFactory;
    private openOrderFactory;
    constructor(hFactory: HFactory<H>, openOrderFactory: OpenOrderFactory<H>);
    capture(amendment: Amendment<H>): Amendment.Snapshot;
    restore(snapshot: Amendment.Snapshot): Amendment<H>;
    copy(amendment: Amendment<H>): Amendment<H>;
}
