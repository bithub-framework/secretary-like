export type OrderId = number | string;

export const enum Side {
    BID = 0,
    ASK = 1,
}

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

export interface OrderbookItem {
    price: number;
    quantity: number;
}

export interface MakerOrder extends OrderbookItem {
    side: Side;
}

export interface Orderbook {
    [side: number]: OrderbookItem[], // side: Side
    time: number;
}

export interface LimitOrder {
    side: Side;
    price: number;
    quantity: number;
}

export interface Assets {
    long: number; // number of the traded instrument
    short: number;
    margin: number; // in the quote currency
}
