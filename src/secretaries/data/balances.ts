import { HLike, H, HStatic } from './h';



export interface Balances<H extends HLike<H>> {
	balance: H;
	available: H;
	time: number;
}

export namespace Balances {
	export interface Snapshot {
		readonly balance: H.Snapshot;
		readonly available: H.Snapshot;
		readonly time: number;
	}
}


export class BalancesStatic<H extends HLike<H>> {
	public constructor(
		private readonly H: HStatic<H>,
	) { }

	public capture(balances: Balances<H>): Balances.Snapshot {
		return {
			balance: this.H.capture(balances.balance),
			available: this.H.capture(balances.available),
			time: balances.time,
		}
	}

	public restore(snapshot: Balances.Snapshot): Balances<H> {
		return {
			balance: this.H.restore(snapshot.balance),
			available: this.H.restore(snapshot.available),
			time: snapshot.time,
		};
	}

	public copy(balances: Balances<H>): Balances<H> {
		return {
			balance: balances.balance,
			available: balances.available,
			time: balances.time,
		};
	}
}
