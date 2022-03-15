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
		private readonly H: HStatic<ConcreteH>,
	) { }

	public capture(balances: ConcreteBalances<ConcreteH>): Balances.Snapshot {
		return {
			balance: this.H.capture(balances.balance),
			available: this.H.capture(balances.available),
			time: balances.time,
		}
	}

	public restore(snapshot: Balances.Snapshot): ConcreteBalances.MutablePlain<ConcreteH> {
		return {
			balance: this.H.restore(snapshot.balance),
			available: this.H.restore(snapshot.available),
			time: snapshot.time,
		};
	}
}
