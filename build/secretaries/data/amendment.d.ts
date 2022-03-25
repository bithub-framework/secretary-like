import { HLike, H, HStatic } from './h';
import { OpenOrder } from './open-order';
import { OrderIdStatic } from './order-id';
export interface Amendment<H extends HLike<H>, OrderId> extends OpenOrder<H, OrderId> {
    newUnfilled: H;
    newPrice: H;
}
export declare namespace Amendment {
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
    restore(snapshot: Amendment.Snapshot): Amendment<H, OrderId>;
    copy(amendment: Amendment<H, OrderId>): Amendment<H, OrderId>;
}
