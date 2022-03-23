import { HLike, H, HStatic } from './h';
import { OpenOrder } from './open-order';
import { OrderIdStatic } from './order-id';
export interface Amendment<H extends HLike<H>, OrderId> extends OpenOrder<H, OrderId> {
    readonly newUnfilled: H;
    readonly newPrice: H;
}
export declare namespace Amendment {
    interface MutablePlain<H extends HLike<H>, OrderId> extends OpenOrder.MutablePlain<H, OrderId> {
        newUnfilled: H;
        newPrice: H;
    }
    interface Snapshot extends OpenOrder.Snapshot {
        readonly newUnfilled: H.Snapshot;
        readonly newPrice: H.Snapshot;
    }
}
export declare class AmendmentStatic<H extends HLike<H>, OrderId> {
    private readonly H;
    private readonly OrderId;
    private readonly OpenOrder;
    constructor(H: HStatic<H>, OrderId: OrderIdStatic<OrderId>);
    capture(amendment: Amendment<H, OrderId>): Amendment.Snapshot;
    restore(snapshot: Amendment.Snapshot): Amendment.MutablePlain<H, OrderId>;
}
