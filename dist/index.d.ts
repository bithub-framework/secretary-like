export declare type OrderId = number | string;
export declare const enum Side {
    BID = 0,
    ASK = 1
}
export declare const BID = Side.BID;
export declare const ASK = Side.ASK;
export interface OpenOrder {
    side: Side;
    price: number;
    quantity: number;
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
export interface LimitOrder {
    side: Side;
    price: number;
    quantity: number;
}
export declare const enum Long {
    SHORT = 0,
    LONG = 1
}
export declare const LONG = Long.LONG;
export declare const SHORT = Long.SHORT;
export interface Assets {
    [long: number]: number;
    balance: number;
}
