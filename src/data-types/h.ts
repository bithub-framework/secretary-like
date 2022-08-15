import {
	CompositeDataLike,
	CompositeDataLikeStatic,
} from './composite-data';


/**
 * typeclass
 * @typeParam H - type
 */
export abstract class HLike<H extends HLike<H>>
	implements CompositeDataLike {
	public abstract plus(x: HLike.Source<H>): H;
	public abstract minus(x: HLike.Source<H>): H;
	public abstract neg(): H;
	public abstract times(x: HLike.Source<H>): H;
	public abstract div(
		x: HLike.Source<H>,
		scale: number,
		roundingMode?: HLike.RoundingMode,
	): H;
	public abstract mod(x: HLike.Source<H>): H;
	public abstract lt(x: HLike.Source<H>): boolean;
	public abstract lte(x: HLike.Source<H>): boolean;
	public abstract gt(x: HLike.Source<H>): boolean;
	public abstract gte(x: HLike.Source<H>): boolean;
	public abstract eq(x: HLike.Source<H>): boolean;
	public abstract neq(x: HLike.Source<H>): boolean;
	public abstract round(
		scale?: number,
		roundingMode?: HLike.RoundingMode,
	): H;
	public abstract abs(): H;
	public abstract toJSON(): string;
	public abstract toFixed(scale?: number): string;
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
