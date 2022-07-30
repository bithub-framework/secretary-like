import { HLike, H, HFactory } from './h';
export interface BalancesLike<H extends HLike<H>> extends Balances.Source<H> {
    balance: H;
    available: H;
    time: number;
    toJSON(): unknown;
    toString(): string;
}
declare class Balances<H extends HLike<H>> implements BalancesLike<H> {
    private factory;
    balance: H;
    available: H;
    time: number;
    constructor(source: Balances.Source<H>, factory: BalancesFactory<H>);
    toJSON(): unknown;
    toString(): string;
}
export declare namespace Balances {
    interface Source<H extends HLike<H>> {
        balance: H;
        available: H;
        time: number;
    }
    interface Snapshot {
        readonly balance: H.Snapshot;
        readonly available: H.Snapshot;
        readonly time: number;
    }
}
export declare class BalancesFactory<H extends HLike<H>> {
    private hFactory;
    constructor(hFactory: HFactory<H>);
    new(source: Balances.Source<H>): Balances<H>;
    capture(balances: BalancesLike<H>): Balances.Snapshot;
    restore(snapshot: Balances.Snapshot): Balances<H>;
}
export {};
