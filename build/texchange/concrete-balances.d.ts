import { HLike, HStatic } from '../secretaries/h';
import { Balances, BalancesStatic } from '../secretaries/balances';
export interface ConcreteBalances<ConcreteH extends HLike<ConcreteH>> extends Balances<ConcreteH> {
}
export declare namespace ConcreteBalances {
    interface MutablePlain<ConcreteH extends HLike<ConcreteH>> extends Balances.MutablePlain<ConcreteH> {
    }
}
export declare class ConcreteBalancesStatic<ConcreteH extends HLike<ConcreteH>> implements BalancesStatic<ConcreteH> {
    private readonly H;
    constructor(H: HStatic<ConcreteH>);
    capture(balances: ConcreteBalances<ConcreteH>): Balances.Snapshot;
    restore(snapshot: Balances.Snapshot): ConcreteBalances.MutablePlain<ConcreteH>;
}
