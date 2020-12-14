export declare type OrderId = number | string;
export declare const enum Side {
    ASK = 0,
    BID = 1
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
export declare const enum Position {
    LONG = 1,
    SHORT = 0
}
export declare const LONG: Position;
export declare const SHORT: Position;
export interface Assets {
    [long: number]: number;
    balance: number;
}
