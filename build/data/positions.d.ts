import { HLike, HFactory } from './h';
import { Position, PositionFactory } from './position';
export interface Positions<H extends HLike<H>> {
    position: Position<H>;
    closable: Position<H>;
    time: number;
}
export declare namespace Positions {
    interface Snapshot {
        readonly position: Position.Snapshot;
        readonly closable: Position.Snapshot;
        readonly time: number;
    }
}
export declare class PositionsFactory<H extends HLike<H>> {
    private hFactory;
    private positionFactory;
    constructor(hFactory: HFactory<H>, positionFactory: PositionFactory<H>);
    capture(positions: Positions<H>): Positions.Snapshot;
    restore(snapshot: Positions.Snapshot): Positions<H>;
    copy(positions: Positions<H>): Positions<H>;
}
