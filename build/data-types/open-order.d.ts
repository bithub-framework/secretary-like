import { HLike, H, HFactory } from './h';
import { LimitOrder, LimitOrderFactory } from './limit-order';
import { OrderId } from './order-id';
import { CompositeDataLike, CompositeDataFactoryLike } from './composite-data';
export interface OpenOrder<H extends HLike<H>> extends LimitOrder<H>, OpenOrder.Source<H>, CompositeDataLike {
    filled: H;
    unfilled: H;
    id: OrderId;
}
export declare namespace OpenOrder {
    interface Source<H extends HLike<H>> extends LimitOrder.Source<H> {
        filled: H;
        unfilled: H;
        id: OrderId;
    }
    interface Snapshot extends LimitOrder.Snapshot {
        readonly filled: H.Snapshot;
        readonly unfilled: H.Snapshot;
        readonly id: OrderId;
    }
}
export declare class OpenOrderFactory<H extends HLike<H>> implements CompositeDataFactoryLike<OpenOrder.Source<H>, OpenOrder<H>, OpenOrder.Snapshot> {
    private hFactory;
    private limitOrderFactory;
    constructor(hFactory: HFactory<H>, limitOrderFactory: LimitOrderFactory<H>);
    new(source: OpenOrder.Source<H>): OpenOrder<H>;
    capture(order: OpenOrder<H>): OpenOrder.Snapshot;
    restore(snapshot: OpenOrder.Snapshot): OpenOrder<H>;
}
