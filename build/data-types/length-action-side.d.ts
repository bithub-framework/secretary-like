export declare enum Length {
    LONG = 0,
    SHORT = 1
}
export declare const LONG = Length.LONG;
export declare const SHORT = Length.SHORT;
export declare namespace Length {
    function from(side: Side, action: Action): Length;
    function invert(length: Length): Length;
}
export declare enum Side {
    BID = 0,
    ASK = 1
}
export declare const BID = Side.BID;
export declare const ASK = Side.ASK;
export declare namespace Side {
    function from(length: Length, action: Action): Side;
    function invert(side: Side): Side;
}
export declare enum Action {
    OPEN = 0,
    CLOSE = 1
}
export declare const OPEN = Action.OPEN;
export declare const CLOSE = Action.CLOSE;
export declare namespace Action {
    function from(length: Length, side: Side): Action;
    function invert(action: Action): Action;
}
