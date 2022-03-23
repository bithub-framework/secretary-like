import { HLike, H } from './secretaries/data/h';
export declare class BigH implements HLike<BigH> {
    private readonly value;
    private constructor();
    plus(x: H.Source<BigH>): BigH;
    minus(x: H.Source<BigH>): BigH;
    times(x: H.Source<BigH>): BigH;
    div(x: H.Source<BigH>): BigH;
    mod(x: H.Source<BigH>): BigH;
    lt(x: H.Source<BigH>): boolean;
    lte(x: H.Source<BigH>): boolean;
    gt(x: H.Source<BigH>): boolean;
    gte(x: H.Source<BigH>): boolean;
    eq(x: H.Source<BigH>): boolean;
    neq(x: H.Source<BigH>): boolean;
    round(decimalPoint?: number, roundingMode?: H.RoundingMode): BigH;
    toJSON(): never;
    toString(): string;
    toFixed(decimalPoint?: number): string;
    private capture;
    static from(source: H.Snapshot): BigH;
    static capture(x: BigH): H.Snapshot;
    static restore(s: H.Snapshot): BigH;
}
