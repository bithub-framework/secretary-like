import {
	CompositeDataLike,
	CompositeDataLikeStatic,
} from './composite-data';


/**
 * typeclass
 * @typeParam H - type
 */
export interface HLike<H extends HLike<H>>
	extends CompositeDataLike {
	plus(x: HLike.Source<H>): H;
	minus(x: HLike.Source<H>): H;
	neg(): H;
	times(x: HLike.Source<H>): H;
	div(
		x: HLike.Source<H>,
		scale: number,
		roundingMode?: HLike.RoundingMode,
	): H;
	mod(x: HLike.Source<H>): H;
	lt(x: HLike.Source<H>): boolean;
	lte(x: HLike.Source<H>): boolean;
	gt(x: HLike.Source<H>): boolean;
	gte(x: HLike.Source<H>): boolean;
	eq(x: HLike.Source<H>): boolean;
	neq(x: HLike.Source<H>): boolean;
	round(
		scale?: number,
		roundingMode?: HLike.RoundingMode,
	): H;
	abs(): H;
	toJSON(): string;
	toFixed(scale?: number): string;
}

/**
 * namespace about {@link HLike}
 */
export namespace HLike {
	export type Snapshot = string;
	export type Literal = number | string;
	export type Source<H extends HLike<H>> = H | Literal;
	export enum RoundingMode {
		TOWARDS_ZERO,
		AWAY_FROM_ZERO,
		HALF_AWAY_FROM_ZERO,
	}
}

/**
 * static part of typeclass HLike
 * @typeParam H - type
 */
export interface HLikeStatic<H extends HLike<H>>
	extends CompositeDataLikeStatic
	<
	HLike.Source<H>,
	H,
	HLike.Snapshot
	> {
	max(x: HLike.Source<H>, ...rest: HLike.Source<H>[]): H;
	min(x: HLike.Source<H>, ...rest: HLike.Source<H>[]): H;
}
