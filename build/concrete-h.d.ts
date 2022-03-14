import { HLike, H } from './secretaries/h';
export declare class ConcreteH implements HLike<ConcreteH> {
    private readonly value;
    private constructor();
    plus(x: ConcreteH): ConcreteH;
    minus(x: ConcreteH): ConcreteH;
    times(x: ConcreteH): ConcreteH;
    div(x: ConcreteH): ConcreteH;
    lt(x: ConcreteH): boolean;
    lte(x: ConcreteH): boolean;
    gt(x: ConcreteH): boolean;
    gte(x: ConcreteH): boolean;
    round(decimalPoint?: number, roundingMode?: H.RoundingMode): ConcreteH;
    toJSON(): never;
    toString(): string;
    toFixed(decimalPoint?: number): string;
    private capture;
    static from(source: H.Snapshot): ConcreteH;
    static capture(x: ConcreteH): H.Snapshot;
    static restore(s: H.Snapshot): ConcreteH;
}
