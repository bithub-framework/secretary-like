import { HLike, HLikeStatic } from './h';
import { CompositeDataLike, CompositeDataLikeStatic } from './composite-data';
export declare abstract class BalancesLike<H extends HLike<H>> implements CompositeDataLike {
    balance: H;
    available: H;
    time: number;
    abstract toJSON(): unknown;
    abstract toString(): string;
    constructor(source: BalancesLike.Source<H>, H: HLikeStatic<H>);
}
export declare namespace BalancesLike {
    interface Literal<H extends HLike<H>> {
        balance: HLike.Source<H>;
        available: HLike.Source<H>;
        time: number;
    }
    type Source<H extends HLike<H>> = BalancesLike<H> | Literal<H>;
    interface Snapshot {
        readonly balance: HLike.Snapshot;
        readonly available: HLike.Snapshot;
        readonly time: number;
    }
}
export declare class BalancesStatic<H extends HLike<H>> implements CompositeDataLikeStatic<BalancesLike.Source<H>, BalancesLike<H>, BalancesLike.Snapshot> {
    private H;
    constructor(H: HLikeStatic<H>);
    create(source: BalancesLike.Source<H>): BalancesLike<H>;
    capture(balances: BalancesLike<H>): BalancesLike.Snapshot;
    restore(snapshot: BalancesLike.Snapshot): BalancesLike<H>;
}
