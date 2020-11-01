export declare type Side = 'buy' | 'sell';
export interface Order {
    side: Side;
    price: number;
    quantity: number;
}
export declare type OrderId = number | string;
export interface OpenOrder extends Order {
    id: OrderId;
}
export declare type TradeId = number | string;
export interface Trade extends Order {
    time: number;
    id: TradeId;
}
export interface Orderbook {
    bids: Order[];
    asks: Order[];
    time: number;
}
export interface Assets {
    long: number;
    short: number;
    margin: number;
}
