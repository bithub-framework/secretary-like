export const enum Action {
    BID = 'bid',
    ASK = 'ask',
}

export interface OrderBase {
    action: Action;
    price: number;
    amount: number;
}

// 有的交易所 orderId 大于 Number.MAX_SAFE_INTEGER
export type OrderId = unknown;

export interface Order extends OrderBase {
    id?: OrderId;
    time?: number;
}

export type TradeId = unknown;

export interface Trade extends OrderBase {
    time: number;
    id: TradeId;
}

export type OrderbookItem = OrderBase;

export interface Orderbook {
    bids: OrderbookItem[],
    asks: OrderbookItem[],
    time: number;
}

export interface DataFromPublicAgentToCenter {
    trades?: Trade[],
    orderbook?: Orderbook,
}

export interface DataFromSecretaryToCenter {
    value: any;
    record: boolean;
};