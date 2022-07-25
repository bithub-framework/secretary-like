import { HLike, H } from './h';
import { Position } from './position';
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
    class Static<H extends HLike<H>> {
        private H;
        private Position;
        constructor(H: H.Static<H>);
        capture(positions: Positions<H>): Positions.Snapshot;
        restore(snapshot: Positions.Snapshot): Positions<H>;
        copy(positions: Positions<H>): Positions<H>;
    }
}
