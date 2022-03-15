export interface HLike<ConcreteH extends HLike<ConcreteH>> {
    plus(x: H.Source<ConcreteH>): ConcreteH;
    minus(x: H.Source<ConcreteH>): ConcreteH;
    times(x: H.Source<ConcreteH>): ConcreteH;
    div(x: H.Source<ConcreteH>): ConcreteH;
    lt(x: H.Source<ConcreteH>): boolean;
    lte(x: H.Source<ConcreteH>): boolean;
    gt(x: H.Source<ConcreteH>): boolean;
    gte(x: H.Source<ConcreteH>): boolean;
    eq(x: H.Source<ConcreteH>): boolean;
    neq(x: H.Source<ConcreteH>): boolean;
    round(decimalPoint?: number, roundingMode?: H.RoundingMode): ConcreteH;
    toJSON(): never;
    toString(): string;
    toFixed(decimalPoint?: number): string;
}
export declare namespace H {
    type Snapshot = string;
    type Source<ConcreteH extends HLike<ConcreteH>> = ConcreteH | number | string;
    enum RoundingMode {
        TOWARDS_ZERO = 0,
        AWAY_FROM_ZERO = 1,
        HALF_AWAY_FROM_ZERO = 2
    }
}
export interface HStatic<ConcreteH extends HLike<ConcreteH>> {
    from(source: H.Source<ConcreteH>): ConcreteH;
    capture(x: ConcreteH): H.Snapshot;
    restore(s: H.Snapshot): ConcreteH;
}
