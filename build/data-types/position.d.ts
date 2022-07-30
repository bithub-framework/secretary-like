import { HLike, H, HFactory } from './h';
import { Length } from './length-action-side';
import { CompositeDataLike, CompositeDataFactoryLike } from './composite-data';
export interface Position<H extends HLike<H>> extends Position.Source<H>, CompositeDataLike {
    [length: Length]: H;
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
export declare class PositionFactory<H extends HLike<H>> implements CompositeDataFactoryLike<Position.Source<H>, Position<H>, Position.Snapshot> {
    private hFactory;
    constructor(hFactory: HFactory<H>);
    new(source: Position.Source<H>): Position<H>;
    capture(position: Position<H>): Position.Snapshot;
    restore(snapshot: Position.Snapshot): Position<H>;
}
