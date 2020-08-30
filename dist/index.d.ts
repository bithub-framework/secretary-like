export declare const enum Action {
    BID = "bid",
    ASK = "ask"
}
export interface OrderBase {
    action: Action;
    price: number;
    amount: number;
}
export declare type OrderId = unknown;
export interface Order extends OrderBase {
    id?: OrderId;
    time?: number;
}
export declare type TradeId = unknown;
export interface Trade extends OrderBase {
    time: number;
    id: TradeId;
}
export declare type OrderbookItem = OrderBase;
export interface Orderbook {
    bids: OrderbookItem[];
    asks: OrderbookItem[];
    time: number;
}
export interface DataFromPublicAgentToCenter {
    trades?: Trade[];
    orderbook?: Orderbook;
}
export interface DataFromSecretaryToCenter {
    value: any;
    record: boolean;
}
