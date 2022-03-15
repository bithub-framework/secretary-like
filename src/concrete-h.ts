import { HLike, H, HStatic } from './secretaries/h';
import { Big, RoundingMode } from 'big.js';


export class ConcreteH implements HLike<ConcreteH> {
	private readonly value: Big;

	private constructor(big: Big) {
		this.value = big;
	}

	public plus(x: H.Source<ConcreteH>): ConcreteH {
		if (typeof x === 'number') return new ConcreteH(this.value.plus(x));
		if (typeof x === 'string') return new ConcreteH(this.value.plus(x));
		return new ConcreteH(this.value.plus(x.value));
	}

	public minus(x: H.Source<ConcreteH>): ConcreteH {
		if (typeof x === 'number') return new ConcreteH(this.value.minus(x));
		if (typeof x === 'string') return new ConcreteH(this.value.minus(x));
		return new ConcreteH(this.value.minus(x.value));
	}

	public times(x: H.Source<ConcreteH>): ConcreteH {
		if (typeof x === 'number') return new ConcreteH(this.value.times(x));
		if (typeof x === 'string') return new ConcreteH(this.value.times(x));
		return new ConcreteH(this.value.times(x.value));
	}

	public div(x: H.Source<ConcreteH>): ConcreteH {
		if (typeof x === 'number') return new ConcreteH(this.value.div(x));
		if (typeof x === 'string') return new ConcreteH(this.value.div(x));
		return new ConcreteH(this.value.div(x.value));
	}

	public mod(x: H.Source<ConcreteH>): ConcreteH {
		if (typeof x === 'number') return new ConcreteH(this.value.mod(x));
		if (typeof x === 'string') return new ConcreteH(this.value.mod(x));
		return new ConcreteH(this.value.mod(x.value));
	}

	public lt(x: H.Source<ConcreteH>): boolean {
		if (typeof x === 'number') return this.value.lt(x);
		if (typeof x === 'string') return this.value.lt(x);
		return this.value.lt(x.value);
	}

	public lte(x: H.Source<ConcreteH>): boolean {
		if (typeof x === 'number') return this.value.lte(x);
		if (typeof x === 'string') return this.value.lte(x);
		return this.value.lte(x.value);
	}

	public gt(x: H.Source<ConcreteH>): boolean {
		if (typeof x === 'number') return this.value.gt(x);
		if (typeof x === 'string') return this.value.gt(x);
		return this.value.gt(x.value);
	}

	public gte(x: H.Source<ConcreteH>): boolean {
		if (typeof x === 'number') return this.value.gte(x);
		if (typeof x === 'string') return this.value.gte(x);
		return this.value.gte(x.value);
	}

	public eq(x: H.Source<ConcreteH>): boolean {
		if (typeof x === 'number') return this.value.eq(x);
		if (typeof x === 'string') return this.value.eq(x);
		return this.value.eq(x.value);
	}

	public neq(x: H.Source<ConcreteH>): boolean {
		if (typeof x === 'number') return !this.value.eq(x);
		if (typeof x === 'string') return !this.value.eq(x);
		return !this.value.eq(x.value);
	}

	public round(
		decimalPoint = 0,
		roundingMode = H.RoundingMode.HALF_AWAY_FROM_ZERO
	): ConcreteH {
		return new ConcreteH(new Big(this.value).round(
			decimalPoint,
			roundingMode === H.RoundingMode.AWAY_FROM_ZERO
				? RoundingMode.RoundUp
				: roundingMode === H.RoundingMode.TOWARDS_ZERO
					? RoundingMode.RoundDown
					: RoundingMode.RoundHalfUp,
		));
	}

	public toJSON(): never {
		throw new Error('Use .capture() instead.');
	}

	public toString(): string {
		return this.value.toString();
	}

	public toFixed(decimalPoint = 0): string {
		return this.value.toFixed(
			decimalPoint,
			RoundingMode.RoundDown,
		);
	}

	private capture(): H.Snapshot {
		return this.value.toString();
	}

	public static from(source: H.Snapshot): ConcreteH {
		return new ConcreteH(new Big(source));
	}

	public static capture(x: ConcreteH): H.Snapshot {
		return x.capture();
	}

	public static restore(s: H.Snapshot): ConcreteH {
		return new ConcreteH(new Big(s));
	}
}

const hStatic: HStatic<ConcreteH> = ConcreteH;
