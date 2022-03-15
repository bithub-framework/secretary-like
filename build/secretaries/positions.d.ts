import { HLike, HStatic } from './h';
import { Position } from './position';
import { Closable } from './closable';
export interface Positions<H extends HLike<H>> {
    readonly position: Position<H>;
    readonly closable: Closable<H>;
    readonly time: number;
}
export declare namespace Positions {
    interface MutablePlain<H extends HLike<H>> {
        position: Position.MutablePlain<H>;
        closable: Closable.MutablePlain<H>;
        time: number;
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
    capture(positions: Positions<H>): Positions.Snapshot;
    restore(snapshot: Positions.Snapshot): Positions.MutablePlain<H>;
}
