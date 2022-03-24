import { HLike, HStatic } from './h';
import { Position } from './position';
import { Closable } from './closable';
export interface Positions<H extends HLike<H>> {
    position: Position<H>;
    closable: Closable<H>;
    time: number;
}
export declare namespace Positions {
    interface Functional<H extends HLike<H>> {
        readonly position: Position.Functional<H>;
        readonly closable: Closable.Functional<H>;
        readonly time: number;
    }
    interface Snapshot {
        readonly position: Position.Snapshot;
        readonly closable: Closable.Snapshot;
        readonly time: number;
    }
}
export declare class PositionsStatic<H extends HLike<H>> {
    private readonly H;
    private readonly Position;
    private readonly Closable;
    constructor(H: HStatic<H>);
    capture(positions: Positions<H> | Positions.Functional<H>): Positions.Snapshot;
    restore(snapshot: Positions.Snapshot): Positions<H> | Positions.Functional<H>;
    copy(positions: Positions<H> | Positions.Functional<H>): Positions<H> | Positions.Functional<H>;
}
