export const enum Action {
    BID = 'bid',
    ASK = 'ask',
}

export interface Order {
    action: Action;
    price: number;
    amount: number;
}

// 有的交易所 orderId 大于 int53
export type OrderId = number | string;

export interface OpenOrder extends Order {
    id: OrderId;
}

export type TradeId = number | string;

export interface Trade extends Order {
    time: number;
    id: TradeId;
}

export interface Orderbook {
    bids: Order[],
    asks: Order[],
    time: number;
}

export interface DataFromSecretaryToCenter {
    value: any;
    record: boolean;
};

export interface Account {
    long: number;
    short: number;
    margin: number;
}
