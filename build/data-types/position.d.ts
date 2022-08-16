import { HLike, SerializableHStatic } from './h';
import { Length } from './length-action-side';
import { SerializableStatic } from './serializable';
export declare abstract class PositionLike<H extends HLike<H>> {
    protected long: H;
    protected short: H;
    abstract toJSON(): unknown;
    abstract toString(): string;
    constructor(source: PositionLike.Source<H>, H: SerializableHStatic<H>);
    length(length: Length): H;
}
export declare namespace PositionLike {
    type Literal<H extends HLike<H>> = [
        [
            Length,
            HLike.Source<H>
        ],
        [
            Length,
            HLike.Source<H>
        ]
    ];
    type Source<H extends HLike<H>> = PositionLike<H> | Literal<H>;
    interface Snapshot {
        readonly long: HLike.Snapshot;
        readonly short: HLike.Snapshot;
    }
}
export interface SerializablePositionStatic<H extends HLike<H>> extends SerializableStatic<PositionLike.Source<H>, PositionLike<H>, PositionLike.Snapshot> {
}
export declare class PositionStatic<H extends HLike<H>> implements SerializablePositionStatic<H> {
    private H;
    constructor(H: SerializableHStatic<H>);
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
