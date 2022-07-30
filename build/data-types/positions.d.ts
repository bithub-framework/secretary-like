import { HLike } from './h';
import { Position, PositionFactory } from './position';
import { CompositeDataLike, CompositeDataFactoryLike } from './composite-data';
export interface Positions<H extends HLike<H>> extends Positions.Source<H>, CompositeDataLike {
    position: Position<H>;
    closable: Position<H>;
    time: number;
    toJSON(): unknown;
    toString(): string;
}
declare class ConcretePositions<H extends HLike<H>> implements Positions<H> {
    private factory;
    position: Position<H>;
    closable: Position<H>;
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
export declare class PositionsFactory<H extends HLike<H>> implements CompositeDataFactoryLike<Positions.Source<H>, Positions<H>, Positions.Snapshot> {
    private positionFactory;
    constructor(positionFactory: PositionFactory<H>);
    new(source: Positions.Source<H>): ConcretePositions<H>;
    capture(positions: Positions<H>): Positions.Snapshot;
    restore(snapshot: Positions.Snapshot): ConcretePositions<H>;
}
export {};
