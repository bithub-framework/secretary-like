import { HLike, HStatic } from '../context/h';
import { Balances, BalancesStatic } from '../context/balances';
export interface ConcreteBalances<ConcreteH extends HLike<ConcreteH>> extends Balances<ConcreteH> {
}
export declare namespace ConcreteBalances {
    interface MutablePlain<ConcreteH extends HLike<ConcreteH>> extends Balances.MutablePlain<ConcreteH> {
    }
}
export declare class ConcreteBalancesStatic<ConcreteH extends HLike<ConcreteH>> implements BalancesStatic<ConcreteH> {
    private ConcreteH;
    constructor(ConcreteH: HStatic<ConcreteH>);
    capture(balances: ConcreteBalances<ConcreteH>): Balances.Snapshot;
    restore(snapshot: Balances.Snapshot): ConcreteBalances.MutablePlain<ConcreteH>;
}
