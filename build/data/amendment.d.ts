import { HLike, H } from './h';
import { OpenOrder, OpenOrderStatic } from './open-order';
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
export declare class AmendmentStatic<H extends HLike<H>> extends OpenOrderStatic<H> {
    captureAmendment(amendment: Amendment<H>): Amendment.Snapshot;
    restoreAmendment(snapshot: Amendment.Snapshot): Amendment<H>;
    copyAmendment(amendment: Amendment<H>): Amendment<H>;
}
