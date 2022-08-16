export declare class Length {
    readonly i: () => Length;
    private constructor();
    static readonly LONG: Length;
    static readonly SHORT: Length;
    static from(side: Side, action: Action): Length;
}
export declare const LONG: Length;
export declare const SHORT: Length;
export declare class Side {
    readonly i: () => Side;
    private constructor();
    static readonly BID: Side;
    static readonly ASK: Side;
    static from(length: Length, action: Action): Side;
}
export declare const BID: Side;
export declare const ASK: Side;
export declare class Action {
    readonly i: () => Action;
    private constructor();
    static readonly OPEN: Action;
    static readonly CLOSE: Action;
    static from(length: Length, side: Side): Action;
}
export declare const OPEN: Action;
export declare const CLOSE: Action;
