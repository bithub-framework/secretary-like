import { HLike, H, HStatic } from './h';
import { Length } from './length-action-side';
export declare class Closable<H extends HLike<H>> {
    private long;
    private short;
    constructor(long: H, short: H);
    get(length: Length): H;
    set(length: Length, position: H): void;
}
export declare namespace Closable {
    interface Snapshot {
        readonly long: H.Snapshot;
        readonly short: H.Snapshot;
    }
}
export declare class ClosableStatic<H extends HLike<H>> {
    private H;
    constructor(H: HStatic<H>);
    capture(closable: Closable<H>): Closable.Snapshot;
    restore(snapshot: Closable.Snapshot): Closable<H>;
    copy(closable: Closable<H>): Closable<H>;
}
