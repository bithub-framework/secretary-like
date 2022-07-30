import { HLike, H, HFactory } from './h';
import { Length } from './length-action-side';
export interface PositionLike<H extends HLike<H>> extends Position.Source<H> {
    [length: Length]: H;
    toJSON(): unknown;
    toString(): string;
}
declare class Position<H extends HLike<H>> implements PositionLike<H> {
    private factory;
    [length: Length]: H;
    constructor(source: Position.Source<H>, factory: PositionFactory<H>);
    toJSON(): unknown;
    toString(): string;
}
export declare namespace Position {
    interface Source<H extends HLike<H>> {
        [length: Length]: H;
    }
    interface Snapshot {
        readonly long: H.Snapshot;
        readonly short: H.Snapshot;
    }
}
export declare class PositionFactory<H extends HLike<H>> {
    private hFactory;
    constructor(hFactory: HFactory<H>);
    new(source: Position.Source<H>): Position<H>;
    capture(position: PositionLike<H>): Position.Snapshot;
    restore(snapshot: Position.Snapshot): Position<H>;
}
export {};
