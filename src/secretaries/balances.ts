import { HLike, H } from './h';


export interface Balances<
	ConcreteH extends HLike<ConcreteH>,
	> {
	readonly balance: ConcreteH;
	readonly available: ConcreteH;
	readonly time: number;
}

export namespace Balances {
	export interface MutablePlain<
		ConcreteH extends HLike<ConcreteH>,
		> {
		balance: ConcreteH;
		available: ConcreteH;
		time: number;
	}
	export interface Snapshot {
		readonly balance: H.Snapshot;
		readonly available: H.Snapshot;
		readonly time: number;
	}
}

export interface BalancesStatic<
	ConcreteH extends HLike<ConcreteH>,
	> {
	capture(balances: Balances<ConcreteH>): Balances.Snapshot;
	restore(snapshot: Balances.Snapshot): Balances.MutablePlain<ConcreteH>;
}
