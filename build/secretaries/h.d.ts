export interface HLike<ConcreteH extends HLike<ConcreteH>> {
    plus(x: ConcreteH): ConcreteH;
    minus(x: ConcreteH): ConcreteH;
    times(x: ConcreteH): ConcreteH;
    div(x: ConcreteH): ConcreteH;
}
export declare namespace H {
    type Snapshot = string;
    type Source = number | string;
}
export interface HStatic<ConcreteH extends HLike<ConcreteH>> {
    from(source: H.Source): ConcreteH;
    capture(x: ConcreteH): H.Snapshot;
    restore(s: H.Snapshot): ConcreteH;
}
