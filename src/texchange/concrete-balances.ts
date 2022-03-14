import { HLike, HStatic } from '../secretaries/h';
import { Balances, BalancesStatic } from '../secretaries/balances';



export interface ConcreteBalances<
	ConcreteH extends HLike<ConcreteH>,
	> extends Balances<ConcreteH> { }


export namespace ConcreteBalances {
	export interface MutablePlain<
		ConcreteH extends HLike<ConcreteH>,
		> extends Balances.MutablePlain<ConcreteH> { }
}


export class ConcreteBalancesStatic<
	ConcreteH extends HLike<ConcreteH>,
	> implements BalancesStatic<
	ConcreteH
	>{
	public constructor(
		private ConcreteH: HStatic<ConcreteH>,
	) { }

	capture(balances: ConcreteBalances<ConcreteH>): Balances.Snapshot {
		return {
			balance: this.ConcreteH.capture(balances.balance),
			available: this.ConcreteH.capture(balances.available),
			time: balances.time,
		}
	}
	restore(snapshot: Balances.Snapshot): ConcreteBalances.MutablePlain<ConcreteH> {
		return {
			balance: this.ConcreteH.restore(snapshot.balance),
			available: this.ConcreteH.restore(snapshot.available),
			time: snapshot.time,
		};
	}
}
