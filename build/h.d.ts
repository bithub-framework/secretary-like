export interface H {
    plus(x: this): H;
    minus(x: this): H;
    times(x: this): H;
    div(x: this): H;
}
export declare namespace H {
    type Snapshot = string;
    type Source = number | string;
}
export declare abstract class HFriendly implements H {
    abstract plus(x: this): H;
    abstract minus(x: this): H;
    abstract times(x: this): H;
    abstract div(x: this): H;
}
export interface HStatic<ConcreteH extends HFriendly> {
    from(source: H.Source): ConcreteH;
    capture(x: ConcreteH): H.Snapshot;
    restore(s: H.Snapshot): ConcreteH;
}
