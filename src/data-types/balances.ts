import { HLike, HLikeStatic } from './h';
import { CompositeDataLike, CompositeDataLikeStatic } from './composite-data';



export abstract class BalancesLike<H extends HLike<H>>
	implements CompositeDataLike {
	public balance: H;
	public available: H;
	public time: number;
	public abstract toJSON(): unknown;
	public abstract toString(): string;

	public constructor(
		source: BalancesLike.Source<H>,
		H: HLikeStatic<H>,
	) {
		this.balance = H.create(source.balance);
		this.available = H.create(source.available);
		this.time = source.time;
	}
}


export namespace BalancesLike {
	export interface Literal<H extends HLike<H>> {
		balance: HLike.Source<H>;
		available: HLike.Source<H>;
		time: number;
	}
	export type Source<H extends HLike<H>> = BalancesLike<H> | Literal<H>;

	export interface Snapshot {
		readonly balance: HLike.Snapshot;
		readonly available: HLike.Snapshot;
		readonly time: number;
	}
}


class Balances<H extends HLike<H>> extends BalancesLike<H>{
	public constructor(
		source: BalancesLike.Source<H>,
		private Balances: BalancesStatic<H>,
		H: HLikeStatic<H>,
	) {
		super(
			source,
			H,
		);
	}

	public toJSON(): unknown {
		return this.Balances.capture(this);
	}

	public toString(): string {
		return JSON.stringify(this.toJSON());
	}
}


export class BalancesStatic<H extends HLike<H>> implements
	CompositeDataLikeStatic<
	BalancesLike.Source<H>,
	BalancesLike<H>,
	BalancesLike.Snapshot>
{
	public constructor(
		private H: HLikeStatic<H>,
	) { }

	public create(source: BalancesLike.Source<H>): BalancesLike<H> {
		return new Balances(
			source,
			this,
			this.H,
		);
	}

	public capture(balances: BalancesLike<H>): BalancesLike.Snapshot {
		return {
			balance: this.H.capture(balances.balance),
			available: this.H.capture(balances.available),
			time: balances.time,
		}
	}

	public restore(snapshot: BalancesLike.Snapshot): BalancesLike<H> {
		return this.create({
			balance: this.H.restore(snapshot.balance),
			available: this.H.restore(snapshot.available),
			time: snapshot.time,
		});
	}
}
