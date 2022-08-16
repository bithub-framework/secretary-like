import { HLike, SerializableHStatic } from './h';
import { CompositeDataLike, SerializableStatic } from './composite-data';
import { boundMethod } from 'autobind-decorator';



export abstract class BalancesLike<H extends HLike<H>>
	implements CompositeDataLike {
	public balance: H;
	public available: H;
	public time: number;
	public abstract toJSON(): unknown;
	public abstract toString(): string;

	public constructor(
		source: BalancesLike.Source<H>,
		H: SerializableHStatic<H>,
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


export interface SerializableBalancesStatic<H extends HLike<H>>
	extends SerializableStatic
	<
	BalancesLike.Source<H>,
	BalancesLike<H>,
	BalancesLike.Snapshot
	> { }


class Balances<H extends HLike<H>> extends BalancesLike<H>{
	public constructor(
		source: BalancesLike.Source<H>,
		private Balances: BalancesStatic<H>,
		H: SerializableHStatic<H>,
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


export class BalancesStatic<H extends HLike<H>>
	implements SerializableBalancesStatic<H>
{
	public constructor(
		private H: SerializableHStatic<H>,
	) { }

	/**
	 * @decorator boundMethod
	 */
	@boundMethod
	public create(source: BalancesLike.Source<H>): BalancesLike<H> {
		return new Balances(
			source,
			this,
			this.H,
		);
	}

	/**
	 * @decorator boundMethod
	 */
	@boundMethod
	public capture(balances: BalancesLike<H>): BalancesLike.Snapshot {
		return {
			balance: this.H.capture(balances.balance),
			available: this.H.capture(balances.available),
			time: balances.time,
		}
	}

	/**
	 * @decorator boundMethod
	 */
	@boundMethod
	public restore(snapshot: BalancesLike.Snapshot): BalancesLike<H> {
		return this.create({
			balance: this.H.restore(snapshot.balance),
			available: this.H.restore(snapshot.available),
			time: snapshot.time,
		});
	}
}
