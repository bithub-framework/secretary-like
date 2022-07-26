import { HLike, H, HFactory } from './h';
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
export declare class BalancesFactory<H extends HLike<H>> {
    private hFactory;
    constructor(hFactory: HFactory<H>);
    capture(balances: Balances<H>): Balances.Snapshot;
    restore(snapshot: Balances.Snapshot): Balances<H>;
    copy(balances: Balances<H>): Balances<H>;
}
