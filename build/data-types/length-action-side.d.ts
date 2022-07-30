export declare type Length = number;
export declare namespace Length {
    const LONG: Length;
    const SHORT: Length;
    function from(side: Side, action: Action): Length;
    function invert(length: Length): Length;
}
export declare type Side = number;
export declare namespace Side {
    const BID: Side;
    const ASK: Side;
    function from(length: Length, action: Action): Side;
    function invert(side: Side): Side;
}
export declare type Action = number;
export declare namespace Action {
    const OPEN: Action;
    const CLOSE: Action;
    function from(length: Length, side: Side): Action;
    function invert(action: Action): Action;
}
