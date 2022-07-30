import { Length, Side, Action } from './length-action-side';
import { HLike, H, HFactory } from './h';
import { CompositeDataLike, CompositeDataFactoryLike } from './composite-data';
export interface LimitOrder<H extends HLike<H>> extends LimitOrder.Source<H>, CompositeDataLike {
    price: H;
    quantity: H;
    side: Side;
    length: Length;
    action: Action;
    toJSON(): unknown;
    toString(): string;
}
declare class ConcreteLimitOrder<H extends HLike<H>> implements LimitOrder<H> {
    private factory;
    price: H;
    quantity: H;
    side: Side;
    length: Length;
    action: Action;
    constructor(source: LimitOrder.Source<H>, factory: LimitOrderFactory<H>);
    toJSON(): unknown;
    toString(): string;
}
export declare namespace LimitOrder {
    interface Source<H extends HLike<H>> {
        price: H;
        quantity: H;
        side: Side;
        length: Length;
        action: Action;
    }
    interface Snapshot {
        readonly price: H.Snapshot;
        readonly quantity: H.Snapshot;
        readonly side: Side;
        readonly length: Length;
        readonly action: Action;
    }
}
export declare class LimitOrderFactory<H extends HLike<H>> implements CompositeDataFactoryLike<LimitOrder.Source<H>, LimitOrder<H>, LimitOrder.Snapshot> {
    private hFactory;
    constructor(hFactory: HFactory<H>);
    new(source: LimitOrder.Source<H>): ConcreteLimitOrder<H>;
    capture(order: LimitOrder<H>): LimitOrder.Snapshot;
    restore(snapshot: LimitOrder.Snapshot): ConcreteLimitOrder<H>;
}
export {};
