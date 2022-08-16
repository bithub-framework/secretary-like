import { HLike, SerializableHStatic } from './h';
import { SerializableStatic } from './serializable';
export declare abstract class BalancesLike<H extends HLike<H>> {
    balance: H;
    available: H;
    time: number;
    abstract toJSON(): unknown;
    abstract toString(): string;
    constructor(source: BalancesLike.Source<H>, H: SerializableHStatic<H>);
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
export interface SerializableBalancesStatic<H extends HLike<H>> extends SerializableStatic<BalancesLike.Source<H>, BalancesLike<H>, BalancesLike.Snapshot> {
}
export declare class BalancesStatic<H extends HLike<H>> implements SerializableBalancesStatic<H> {
    private H;
    constructor(H: SerializableHStatic<H>);
    /**
     * @decorator boundMethod
     */
    create(source: BalancesLike.Source<H>): BalancesLike<H>;
    /**
     * @decorator boundMethod
     */
    capture(balances: BalancesLike<H>): BalancesLike.Snapshot;
    /**
     * @decorator boundMethod
     */
    restore(snapshot: BalancesLike.Snapshot): BalancesLike<H>;
}
