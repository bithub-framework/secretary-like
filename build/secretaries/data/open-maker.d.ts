import { HLike, H, HStatic } from './h';
import { OpenOrder } from './open-order';
import { OrderIdStatic } from './order-id';
export interface OpenMaker<H extends HLike<H>, OrderId> extends OpenOrder<H, OrderId> {
    readonly behind: H;
}
export declare namespace OpenMaker {
    interface MutablePlain<H extends HLike<H>, OrderId> extends OpenOrder.MutablePlain<H, OrderId> {
        behind: H;
    }
    interface Snapshot extends OpenOrder.Snapshot {
        readonly behind: H.Snapshot;
    }
}
export declare class OpenMakerStatic<H extends HLike<H>, OrderId> {
    private readonly H;
    private readonly OrderId;
    private readonly OpenOrder;
    constructor(H: HStatic<H>, OrderId: OrderIdStatic<OrderId>);
    capture(order: OpenMaker<H, OrderId>): OpenMaker.Snapshot;
    restore(snapshot: OpenMaker.Snapshot): OpenMaker.MutablePlain<H, OrderId>;
    copy(order: OpenMaker<H, OrderId>): OpenMaker.MutablePlain<H, OrderId>;
}
