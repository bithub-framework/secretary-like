export declare enum Length {
    LONG = 0,
    SHORT = 1
}
export declare namespace Length {
    function from(side: Side, action: Action): Length;
}
export declare enum Side {
    BID = 0,
    ASK = 1
}
export declare namespace Side {
    function from(length: Length, action: Action): Side;
}
export declare enum Action {
    OPEN = 0,
    CLOSE = 1
}
export declare namespace Action {
    function from(length: Length, side: Side): Action;
}
