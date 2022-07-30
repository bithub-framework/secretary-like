import { HLike, H, HFactory } from './h';



export interface BalancesLike<H extends HLike<H>> extends Balances.Source<H> {
	balance: H;
	available: H;
	time: number;
	toJSON(): unknown;
	toString(): string;
}

class Balances<H extends HLike<H>> implements BalancesLike<H>{
	public balance: H;
	public available: H;
	public time: number;

	public constructor(
		source: Balances.Source<H>,
		private factory: BalancesFactory<H>,
	) {
		({
			balance: this.balance,
			available: this.available,
			time: this.time,
		} = source);
	}

	public toJSON(): unknown {
		return this.factory.capture(this);
	}

	public toString(): string {
		return JSON.stringify(this.toJSON());
	}
}

export namespace Balances {
	export interface Source<H extends HLike<H>> {
		balance: H;
		available: H;
		time: number;
	}

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

	public new(source: Balances.Source<H>): Balances<H> {
		return new Balances(source, this);
	}

	public capture(balances: BalancesLike<H>): Balances.Snapshot {
		return {
			balance: this.hFactory.capture(balances.balance),
			available: this.hFactory.capture(balances.available),
			time: balances.time,
		}
	}

	public restore(snapshot: Balances.Snapshot): Balances<H> {
		return this.new({
			balance: this.hFactory.restore(snapshot.balance),
			available: this.hFactory.restore(snapshot.available),
			time: snapshot.time,
		});
	}
}
