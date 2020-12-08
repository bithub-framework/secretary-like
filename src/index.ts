export type Side = 'buy' | 'sell';

export type OrderId = number | string;

export interface OpenOrder {
    side: Side;
    price: number;
    quantity: number;
}

export type TradeId = number | string;

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
    bids: OrderBookItem[],
    asks: OrderBookItem[],
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
