import { CompositeDataLike, CompositeDataLikeStatic } from './composite-data';
/**
 * typeclass
 * @typeParam H - type
 */
export interface HLike<H extends HLike<H>> extends CompositeDataLike {
    plus(x: HLike.Source<H>): H;
    minus(x: HLike.Source<H>): H;
    neg(): H;
    times(x: HLike.Source<H>): H;
    div(x: HLike.Source<H>, scale: number, roundingMode?: HLike.RoundingMode): H;
    mod(x: HLike.Source<H>): H;
    lt(x: HLike.Source<H>): boolean;
    lte(x: HLike.Source<H>): boolean;
    gt(x: HLike.Source<H>): boolean;
    gte(x: HLike.Source<H>): boolean;
    eq(x: HLike.Source<H>): boolean;
    neq(x: HLike.Source<H>): boolean;
    round(scale?: number, roundingMode?: HLike.RoundingMode): H;
    abs(): H;
    toJSON(): string;
    toFixed(scale?: number): string;
}
/**
 * namespace about {@link HLike}
 */
export declare namespace HLike {
    type Snapshot = string;
    type Literal = number | string;
    type Source<H extends HLike<H>> = H | Literal;
    enum RoundingMode {
        TOWARDS_ZERO = 0,
        AWAY_FROM_ZERO = 1,
        HALF_AWAY_FROM_ZERO = 2
    }
}
/**
 * static part of typeclass HLike
 * @typeParam H - type
 */
export interface HLikeStatic<H extends HLike<H>> extends CompositeDataLikeStatic<HLike.Source<H>, H, HLike.Snapshot> {
    max(x: HLike.Source<H>, ...rest: HLike.Source<H>[]): H;
    min(x: HLike.Source<H>, ...rest: HLike.Source<H>[]): H;
}
