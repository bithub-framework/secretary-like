import { HLike, SerializableHStatic } from './h';
import { Length } from './pairs';
import { SerializableStatic } from './serializable';
export declare abstract class PositionPairLike<H extends HLike<H>> {
    protected long: H;
    protected short: H;
    abstract toJSON(): unknown;
    abstract toString(): string;
    constructor(source: PositionPairLike.Source<H>, H: SerializableHStatic<H>);
    abstract set(length: Length, position: H): PositionPairLike<H>;
    toLiteral(): PositionPairLike.Literal<H>;
    length(length: Length): H;
}
export declare namespace PositionPairLike {
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
    type Source<H extends HLike<H>> = PositionPairLike<H> | Literal<H>;
    interface Snapshot {
        readonly long: HLike.Snapshot;
        readonly short: HLike.Snapshot;
    }
}
export interface SerializablePositionPairStatic<H extends HLike<H>> extends SerializableStatic<PositionPairLike.Source<H>, PositionPairLike<H>, PositionPairLike.Snapshot> {
}
export declare class PositionPairStatic<H extends HLike<H>> implements SerializablePositionPairStatic<H> {
    private H;
    constructor(H: SerializableHStatic<H>);
    /**
     * @decorator boundMethod
     */
    create(source: PositionPairLike.Source<H>): PositionPairLike<H>;
    /**
     * @decorator boundMethod
     */
    capture(positionPair: PositionPairLike<H>): PositionPairLike.Snapshot;
    /**
     * @decorator boundMethod
     */
    restore(snapshot: PositionPairLike.Snapshot): PositionPairLike<H>;
}
