import { HLike, SerializableHStatic } from './h';
import { OpenOrderLike } from './open-order';
import { SerializableStatic } from './serializable';
export declare abstract class AmendmentLike<H extends HLike<H>> extends OpenOrderLike<H> {
    newUnfilled: H;
    newPrice: H;
    constructor(source: AmendmentLike.Source<H>, H: SerializableHStatic<H>);
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
export interface SerializableAmendmentStatic<H extends HLike<H>> extends SerializableStatic<AmendmentLike.Source<H>, AmendmentLike<H>, AmendmentLike.Snapshot> {
}
export declare class AmendmentStatic<H extends HLike<H>> implements SerializableAmendmentStatic<H> {
    private H;
    constructor(H: SerializableHStatic<H>);
    /**
     * @decorator boundMethod
     */
    create(source: AmendmentLike.Source<H>): AmendmentLike<H>;
    /**
     * @decorator boundMethod
     */
    capture(amendment: AmendmentLike<H>): AmendmentLike.Snapshot;
    /**
     * @decorator boundMethod
     */
    restore(snapshot: AmendmentLike.Snapshot): AmendmentLike<H>;
}
