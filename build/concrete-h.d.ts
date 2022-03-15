import { HLike, H } from './secretaries/h';
export declare class ConcreteH implements HLike<ConcreteH> {
    private readonly value;
    private constructor();
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
    private capture;
    static from(source: H.Snapshot): ConcreteH;
    static capture(x: ConcreteH): H.Snapshot;
    static restore(s: H.Snapshot): ConcreteH;
}
