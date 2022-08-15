import { HLike } from './h';
import { PositionLike, PositionStatic } from './position';
import { CompositeDataLike, CompositeDataLikeStatic } from './composite-data';
export declare abstract class PositionsLike<H extends HLike<H>> implements CompositeDataLike {
    position: PositionLike<H>;
    closable: PositionLike<H>;
    time: number;
    constructor(source: PositionsLike.Source<H>, Position: PositionStatic<H>);
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
export declare class PositionsStatic<H extends HLike<H>> implements CompositeDataLikeStatic<PositionsLike.Source<H>, PositionsLike<H>, PositionsLike.Snapshot> {
    private Position;
    constructor(Position: PositionStatic<H>);
    create(source: PositionsLike.Source<H>): PositionsLike<H>;
    capture(positions: PositionsLike<H>): PositionsLike.Snapshot;
    restore(snapshot: PositionsLike.Snapshot): PositionsLike<H>;
}
