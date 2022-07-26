export interface HLike<H extends HLike<H>> {
	plus(x: H.Source<H>): H;
	minus(x: H.Source<H>): H;
	times(x: H.Source<H>): H;
	div(x: H.Source<H>): H;
	mod(x: H.Source<H>): H;
	lt(x: H.Source<H>): boolean;
	lte(x: H.Source<H>): boolean;
	gt(x: H.Source<H>): boolean;
	gte(x: H.Source<H>): boolean;
	eq(x: H.Source<H>): boolean;
	neq(x: H.Source<H>): boolean;
	round(
		decimalPoint?: number,
		roundingMode?: H.RoundingMode,
	): H;
	toJSON(): string;
	toFixed(decimalPoint?: number): string;
}

export namespace H {
	export type Snapshot = string;
	export type Source<H extends HLike<H>> = H | number | string;
	export enum RoundingMode {
		TOWARDS_ZERO,
		AWAY_FROM_ZERO,
		HALF_AWAY_FROM_ZERO,
	}
}

export abstract class HStatic<H extends HLike<H>> {
	public abstract from(source: H.Source<H>): H;

	public capture(x: H): H.Snapshot {
		return x.toJSON();
	}

	public abstract restore(snapshot: H.Snapshot): H;

	public max(x: H, ...rest: H[]): H {
		return [x, ...rest].reduce(
			(x, y) => x.gt(y) ? x : y,
		);
	}

	public min(x: H, ...rest: H[]): H {
		return [x, ...rest].reduce(
			(x, y) => x.lt(y) ? x : y,
		);
	}
}
