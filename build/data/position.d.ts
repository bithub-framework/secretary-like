import { HLike, H, HFactory } from './h';
import { Length } from './length-action-side';
export declare class Position<H extends HLike<H>> {
    private long;
    private short;
    constructor(long: H, short: H);
    get(length: Length): H;
    set(length: Length, position: H): void;
}
export declare namespace Position {
    interface Snapshot {
        readonly long: H.Snapshot;
        readonly short: H.Snapshot;
    }
}
export declare class PositionFactory<H extends HLike<H>> {
    private hFactory;
    constructor(hFactory: HFactory<H>);
    capture(position: Position<H>): Position.Snapshot;
    restore(snapshot: Position.Snapshot): Position<H>;
    copy(position: Position<H>): Position<H>;
}
