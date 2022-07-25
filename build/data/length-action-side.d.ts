export declare enum Length {
    LONG = "LONG",
    SHORT = "SHORT"
}
export declare namespace Length {
    function from(side: Side, action: Action): Length;
}
export declare enum Side {
    BID = "BID",
    ASK = "ASK"
}
export declare namespace Side {
    function from(length: Length, action: Action): Side;
}
export declare enum Action {
    OPEN = "OPEN",
    CLOSE = "CLOSE"
}
export declare namespace Action {
    function from(length: Length, side: Side): Action;
}
