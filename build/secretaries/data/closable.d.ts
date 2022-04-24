import { HLike, H, HStatic } from './h';
import { Length } from './length';
export interface Closable<H extends HLike<H>> {
    [length: Length]: H;
}
export declare namespace Closable {
    interface Snapshot {
        readonly [length: Length]: H.Snapshot;
    }
}
export declare class ClosableStatic<H extends HLike<H>> {
    private H;
    constructor(H: HStatic<H>);
    capture(closable: Closable<H>): Closable.Snapshot;
    restore(snapshot: Closable.Snapshot): Closable<H>;
    copy(closable: Closable<H>): Closable<H>;
}
