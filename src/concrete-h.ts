import { HLike, H, HStatic } from './secretaries/h';
import { Big, RoundingMode } from 'big.js';


export class ConcreteH implements HLike<ConcreteH> {
	private readonly value: Big;

	private constructor(big: Big) {
		this.value = big;
	}

	public plus(x: ConcreteH): ConcreteH {
		return new ConcreteH(this.value.plus(x.value));
	}

	public minus(x: ConcreteH): ConcreteH {
		return new ConcreteH(this.value.minus(x.value));
	}

	public times(x: ConcreteH): ConcreteH {
		return new ConcreteH(this.value.times(x.value));
	}

	public div(x: ConcreteH): ConcreteH {
		return new ConcreteH(this.value.div(x.value));
	}

	public lt(x: ConcreteH): boolean {
		return this.value.lt(x.value);
	}

	public lte(x: ConcreteH): boolean {
		return this.value.lte(x.value);
	}

	public gt(x: ConcreteH): boolean {
		return this.value.gt(x.value);
	}

	public gte(x: ConcreteH): boolean {
		return this.value.gte(x.value);
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
