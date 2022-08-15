import { HLike, HLikeStatic } from './h';
import { OpenOrderLike, OpenOrderStatic } from './open-order';
import { CompositeDataLike, CompositeDataLikeStatic } from './composite-data';
export declare abstract class AmendmentLike<H extends HLike<H>> extends OpenOrderLike<H> implements CompositeDataLike {
    newUnfilled: H;
    newPrice: H;
    constructor(source: AmendmentLike.Source<H>, H: HLikeStatic<H>);
}
export declare namespace AmendmentLike {
    interface Literal<H extends HLike<H>> extends OpenOrderLike.Literal<H> {
        newUnfilled: HLike.Source<H>;
        newPrice: HLike.Source<H>;
    }
    type Source<H extends HLike<H>> = AmendmentLike<H> | Literal<H>;
    interface Snapshot extends OpenOrderLike.Snapshot {
        readonly newUnfilled: HLike.Snapshot;
        readonly newPrice: HLike.Snapshot;
    }
}
export declare class AmendmentStatic<H extends HLike<H>> implements CompositeDataLikeStatic<AmendmentLike.Source<H>, AmendmentLike<H>, AmendmentLike.Snapshot> {
    private H;
    private OpenOrder;
    constructor(H: HLikeStatic<H>, OpenOrder: OpenOrderStatic<H>);
    create(source: AmendmentLike.Source<H>): AmendmentLike<H>;
    capture(amendment: AmendmentLike<H>): AmendmentLike.Snapshot;
    restore(snapshot: AmendmentLike.Snapshot): AmendmentLike<H>;
}
