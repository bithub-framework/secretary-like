export declare type OrderId = number | string;
export declare const enum Side {
    ASK = 0,
    BID = 1
}
export declare const BID = Side.BID;
export declare const ASK = Side.ASK;
export interface LimitOrder {
    side: Side;
    price: number;
    quantity: number;
    open: boolean;
}
export interface OpenOrder extends LimitOrder {
    id: OrderId;
}
export declare type TradeId = number | string;
export interface Trade {
    side: Side;
    price: number;
    quantity: number;
    time: number;
    id: TradeId;
}
export interface MakerOrder {
    price: number;
    quantity: number;
    side: Side;
}
export interface Orderbook {
    [side: number]: MakerOrder[];
    time: number;
}
export declare const enum Length {
    LONG = 1,
    SHORT = 0
}
export declare const LONG: Length;
export declare const SHORT: Length;
export interface Assets {
    position: {
        [length: number]: number;
    };
    leverage: number;
    balance: number;
    cost: {
        [length: number]: number;
    };
    frozen: number;
    margin: {
        [length: number]: number;
    };
    reserve: number;
}
