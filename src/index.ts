export type OrderId = number | string;

export const enum Side {
    BID = 0,
    ASK = 1,
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

export const enum Long {
    LONG = Side.BID,
    SHORT = Side.ASK,
}
export const LONG = Long.LONG;
export const SHORT = Long.SHORT;

export interface Assets {
    [long: number]: number;
    balance: number; // in the quote currency
}
