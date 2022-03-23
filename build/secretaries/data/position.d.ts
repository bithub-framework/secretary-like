import { HLike, H, HStatic } from './h';
import { Length } from './length';
export interface Position<H extends HLike<H>> {
    readonly [length: Length]: H;
}
export declare namespace Position {
    interface MutablePlain<H extends HLike<H>> {
        [length: Length]: H;
    }
    interface Snapshot {
        readonly [length: Length]: H.Snapshot;
    }
}
export declare class PositionStatic<H extends HLike<H>> {
    private readonly H;
    constructor(H: HStatic<H>);
    capture(position: Position<H>): Position.Snapshot;
    restore(snapshot: Position.Snapshot): Position.MutablePlain<H>;
    copy(position: Position<H>): Position.MutablePlain<H>;
}
