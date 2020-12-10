export declare type OrderId = number | string;
export declare const enum Side {
    BID = 0,
    ASK = 1
}
export interface OpenOrder {
    side: Side;
    price: number;
    quantity: number;
}
export declare type TradeId = number | string;
export interface Trade {
    side: Side;
    price: number;
    quantity: number;
    time: number;
    id: TradeId;
}
interface OrderBookItem {
    side: Side;
    price: number;
    quantity: number;
}
export interface Orderbook {
    [side: number]: OrderBookItem[];
    time: number;
}
export interface LimitOrder {
    side: Side;
    price: number;
    quantity: number;
}
export interface Assets {
    long: number;
    short: number;
    margin: number;
}
export {};
