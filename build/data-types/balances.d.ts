import { HLike, H, HFactory } from './h';
import { CompositeDataLike, CompositeDataFactoryLike } from './composite-data';
export interface Balances<H extends HLike<H>> extends Balances.Source<H>, CompositeDataLike {
    balance: H;
    available: H;
    time: number;
    toJSON(): unknown;
    toString(): string;
}
declare class ConcreteBalances<H extends HLike<H>> implements Balances<H> {
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
export declare class BalancesFactory<H extends HLike<H>> implements CompositeDataFactoryLike<Balances.Source<H>, Balances<H>, Balances.Snapshot> {
    private hFactory;
    constructor(hFactory: HFactory<H>);
    new(source: Balances.Source<H>): ConcreteBalances<H>;
    capture(balances: Balances<H>): Balances.Snapshot;
    restore(snapshot: Balances.Snapshot): ConcreteBalances<H>;
}
export {};