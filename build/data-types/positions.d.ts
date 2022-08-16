import { HLike } from './h';
import { PositionLike, PositionStatic } from './position';
import { CompositeDataLike, SerializableStatic } from './composite-data';
export declare abstract class PositionsLike<H extends HLike<H>> implements CompositeDataLike {
    position: PositionLike<H>;
    closable: PositionLike<H>;
    time: number;
    constructor(source: PositionsLike.Source<H>, Position: SerializableStatic<PositionLike.Source<H>, PositionLike<H>, PositionLike.Snapshot>);
    abstract toJSON(): unknown;
    abstract toString(): string;
}
export declare namespace PositionsLike {
    interface Literal<H extends HLike<H>> {
        position: PositionLike.Source<H>;
        closable: PositionLike.Source<H>;
        time: number;
    }
    type Source<H extends HLike<H>> = PositionsLike<H> | Literal<H>;
    interface Snapshot {
        readonly position: PositionLike.Snapshot;
        readonly closable: PositionLike.Snapshot;
        readonly time: number;
    }
}
export interface SerializablePositionsStatic<H extends HLike<H>> extends SerializableStatic<PositionsLike.Source<H>, PositionsLike<H>, PositionsLike.Snapshot> {
}
export declare class PositionsStatic<H extends HLike<H>> implements SerializablePositionsStatic<H> {
    private Position;
    constructor(Position: PositionStatic<H>);
    /**
     * @decorator boundMethod
     */
    create(source: PositionsLike.Source<H>): PositionsLike<H>;
    /**
     * @decorator boundMethod
     */
    capture(positions: PositionsLike<H>): PositionsLike.Snapshot;
    /**
     * @decorator boundMethod
     */
    restore(snapshot: PositionsLike.Snapshot): PositionsLike<H>;
}
