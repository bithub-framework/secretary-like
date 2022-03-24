import { HLike, H, HStatic } from './h';
import { Length } from './length';
export interface Closable<H extends HLike<H>> {
    [length: Length]: H;
}
export declare namespace Closable {
    interface Functional<H extends HLike<H>> {
        readonly [length: Length]: H;
    }
    interface Snapshot {
        readonly [length: Length]: H.Snapshot;
    }
}
export declare class ClosableStatic<H extends HLike<H>> {
    private readonly H;
    constructor(H: HStatic<H>);
    capture(closable: Closable<H> | Closable.Functional<H>): Closable.Snapshot;
    restore(snapshot: Closable.Snapshot): Closable<H> | Closable.Functional<H>;
    copy(closable: Closable<H> | Closable.Functional<H>): Closable<H> | Closable.Functional<H>;
}
