import { HLike, H, HStatic } from './h';
import { OpenOrder } from './open-order';
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
export declare class AmendmentStatic<H extends HLike<H>> {
    private H;
    private OpenOrder;
    constructor(H: HStatic<H>);
    capture(amendment: Amendment<H>): Amendment.Snapshot;
    restore(snapshot: Amendment.Snapshot): Amendment<H>;
    copy(amendment: Amendment<H>): Amendment<H>;
}