import Big from 'big.js';



export interface HLike<ConcreteH extends HLike<ConcreteH>> {
	plus(x: ConcreteH): ConcreteH;
	minus(x: ConcreteH): ConcreteH;
	times(x: ConcreteH): ConcreteH;
	div(x: ConcreteH): ConcreteH;
	lt(x: ConcreteH): boolean;
	lte(x: ConcreteH): boolean;
	gt(x: ConcreteH): boolean;
	gte(x: ConcreteH): boolean;
	round(
		decimalPoint?: number,
		roundingMode?: H.RoundingMode,
	): ConcreteH;
	toJSON(): never;
	toString(): string;
	toFixed(decimalPoint?: number): string;
}
export namespace H {
	export type Snapshot = string;
	export type Source = number | string;
	export enum RoundingMode {
		TOWARDS_ZERO,
		AWAY_FROM_ZERO,
		HALF_AWAY_FROM_ZERO,
	}
}


export interface HStatic<ConcreteH extends HLike<ConcreteH>> {
	from(source: H.Source): ConcreteH;
	capture(x: ConcreteH): H.Snapshot;
	restore(s: H.Snapshot): ConcreteH;
}
