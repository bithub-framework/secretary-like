export type Side = 'buy' | 'sell';

export interface Order {
    side: Side;
    price: number; // in USD
    quantity: number; // number of the traded instrument
}

// 有的交易所 orderId 和 tradeId 大于 int53，甚至不一定是数字，更不一定有序。
export type OrderId = number | string;

export interface OpenOrder extends Order {
    id: OrderId;
}

export type TradeId = number | string;

export interface Trade extends Order {
    time: number; // Date 不能 JSON 序列化
    id: TradeId;
}

export interface Orderbook {
    bids: Order[],
    asks: Order[],
    time: number;
}

export interface Assets {
    long: number; // number of the traded instrument
    short: number;
    margin: number; // in the quote currency
}
