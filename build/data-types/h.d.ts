import { CompositeDataLike, CompositeDataLikeStatic } from './composite-data';
/**
 * typeclass
 * @typeParam H - type
 */
export declare abstract class HLike<H extends HLike<H>> implements CompositeDataLike {
    abstract plus(x: HLike.Source<H>): H;
    abstract minus(x: HLike.Source<H>): H;
    abstract neg(): H;
    abstract times(x: HLike.Source<H>): H;
    abstract div(x: HLike.Source<H>, scale: number, roundingMode?: HLike.RoundingMode): H;
    abstract mod(x: HLike.Source<H>): H;
    abstract lt(x: HLike.Source<H>): boolean;
    abstract lte(x: HLike.Source<H>): boolean;
    abstract gt(x: HLike.Source<H>): boolean;
    abstract gte(x: HLike.Source<H>): boolean;
    abstract eq(x: HLike.Source<H>): boolean;
    abstract neq(x: HLike.Source<H>): boolean;
    abstract round(scale?: number, roundingMode?: HLike.RoundingMode): H;
    abstract abs(): H;
    abstract toJSON(): string;
    abstract toFixed(scale?: number): string;
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
