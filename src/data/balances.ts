import { HLike, H, HFactory } from './h';



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

export class BalancesFactory<H extends HLike<H>> {
	public constructor(
		private hFactory: HFactory<H>,
	) { }

	public capture(balances: Balances<H>): Balances.Snapshot {
		return {
			balance: this.hFactory.capture(balances.balance),
			available: this.hFactory.capture(balances.available),
			time: balances.time,
		}
	}

	public restore(snapshot: Balances.Snapshot): Balances<H> {
		return {
			balance: this.hFactory.restore(snapshot.balance),
			available: this.hFactory.restore(snapshot.available),
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
