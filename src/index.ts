export type OrderId = number | string;

// 常数不是任意指定的，必须 ASK 为 0，BID 为 1。
export const enum Side {
    ASK = 0,
    BID = 1,
}
export const BID = Side.BID;
export const ASK = Side.ASK;

export interface OpenOrder {
    side: Side;
    price: number;
    quantity: number;
    id: OrderId;
}

export type TradeId = number | string;

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
    side: Side,
}

export interface Orderbook {
    [side: number]: MakerOrder[], // side: Side
    time: number;
}

export interface LimitOrder {
    side: Side;
    price: number;
    quantity: number;
}

export const enum Position {
    LONG = Side.BID,
    SHORT = Side.ASK,
}
export const LONG = Position.LONG;
export const SHORT = Position.SHORT;

export interface Assets {
    [long: number]: number;
    balance: number; // in the quote currency
}
