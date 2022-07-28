import { HLike, H, HFactory } from './h';
import { Length } from './length-action-side';
export declare class Position<H extends HLike<H>> {
    [length: Length]: H;
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
