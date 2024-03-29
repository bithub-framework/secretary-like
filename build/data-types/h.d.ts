import { SerializableStatic } from './serializable';
/**
 * typeclass
 * @typeParam H - type
 */
export interface HLike<H extends HLike<H>> {
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
 * static part of typeclass {@link HLike}
 * @typeParam H - type
 */
export interface HLikeStatic<H extends HLike<H>> {
    max(x: HLike.Source<H>, ...rest: HLike.Source<H>[]): H;
    min(x: HLike.Source<H>, ...rest: HLike.Source<H>[]): H;
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
 * static part of typeclass `SerializableH`
 */
export interface SerializableHStatic<H extends HLike<H>> extends SerializableStatic<HLike.Source<H>, H, HLike.Snapshot> {
}
