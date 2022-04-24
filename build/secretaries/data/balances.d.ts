import { HLike, H, HStatic } from './h';
export interface Balances<H extends HLike<H>> {
    balance: H;
    available: H;
    time: number;
}
export declare namespace Balances {
    interface Snapshot {
        readonly balance: H.Snapshot;
        readonly available: H.Snapshot;
        readonly time: number;
    }
}
export declare class BalancesStatic<H extends HLike<H>> {
    private H;
    constructor(H: HStatic<H>);
    capture(balances: Balances<H>): Balances.Snapshot;
    restore(snapshot: Balances.Snapshot): Balances<H>;
    copy(balances: Balances<H>): Balances<H>;
}
