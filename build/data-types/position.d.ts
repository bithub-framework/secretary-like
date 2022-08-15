import { HLike, HLikeStatic } from './h';
import { Length } from './length-action-side';
import { CompositeDataLike, CompositeDataLikeStatic } from './composite-data';
export declare abstract class PositionLike<H extends HLike<H>> implements CompositeDataLike {
    protected long: H;
    protected short: H;
    abstract toJSON(): unknown;
    abstract toString(): string;
    constructor(source: PositionLike.Source<H>, H: HLikeStatic<H>);
    length(length: Length): H;
}
export declare namespace PositionLike {
    interface Literal<H extends HLike<H>> {
        long: HLike.Source<H>;
        short: HLike.Source<H>;
    }
    type Source<H extends HLike<H>> = PositionLike<H> | Literal<H>;
    interface Snapshot {
        readonly long: HLike.Snapshot;
        readonly short: HLike.Snapshot;
    }
}
export declare class PositionStatic<H extends HLike<H>> implements CompositeDataLikeStatic<PositionLike.Source<H>, PositionLike<H>, PositionLike.Snapshot> {
    private H;
    constructor(H: HLikeStatic<H>);
    /**
     * @decorator boundMethod
     */
    create(source: PositionLike.Source<H>): PositionLike<H>;
    /**
     * @decorator boundMethod
     */
    capture(position: PositionLike<H>): PositionLike.Snapshot;
    /**
     * @decorator boundMethod
     */
    restore(snapshot: PositionLike.Snapshot): PositionLike<H>;
}
