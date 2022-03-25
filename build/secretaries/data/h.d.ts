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
    round(decimalPoint?: number, roundingMode?: H.RoundingMode): H;
    toJSON(): never;
    toString(): string;
    toFixed(decimalPoint?: number): string;
}
export declare namespace H {
    type Snapshot = string;
    type Source<H extends HLike<H>> = H | number | string;
    enum RoundingMode {
        TOWARDS_ZERO = 0,
        AWAY_FROM_ZERO = 1,
        HALF_AWAY_FROM_ZERO = 2
    }
}
export interface HStatic<H extends HLike<H>> {
    from(source: H.Source<H>): H;
    capture(x: H): H.Snapshot;
    restore(s: H.Snapshot): H;
}