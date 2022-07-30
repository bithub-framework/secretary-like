import { HLike } from './h';
import { Position, PositionLike, PositionFactory } from './position';
export interface PositionsLike<H extends HLike<H>> extends Positions.Source<H> {
    position: PositionLike<H>;
    closable: PositionLike<H>;
    time: number;
    toJSON(): unknown;
    toString(): string;
}
declare class Positions<H extends HLike<H>> implements PositionsLike<H> {
    private factory;
    position: PositionLike<H>;
    closable: PositionLike<H>;
    time: number;
    constructor(source: Positions.Source<H>, factory: PositionsFactory<H>, positionFactory: PositionFactory<H>);
    toJSON(): unknown;
    toString(): string;
}
export declare namespace Positions {
    interface Source<H extends HLike<H>> {
        position: Position.Source<H>;
        closable: Position.Source<H>;
        time: number;
    }
    interface Snapshot {
        readonly position: Position.Snapshot;
        readonly closable: Position.Snapshot;
        readonly time: number;
    }
}
export declare class PositionsFactory<H extends HLike<H>> {
    private positionFactory;
    constructor(positionFactory: PositionFactory<H>);
    new(source: Positions.Source<H>): Positions<H>;
    capture(positions: PositionsLike<H>): Positions.Snapshot;
    restore(snapshot: Positions.Snapshot): Positions<H>;
}
export {};
