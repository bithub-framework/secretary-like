declare enum Action {
    BID = "bid",
    ASK = "ask"
}
interface OrderBase {
    action: Action;
    price: number;
    amount: number;
}
declare type OrderId = unknown;
interface Order extends OrderBase {
    id?: OrderId;
    time?: number;
}
declare type TradeId = unknown;
interface Trade extends OrderBase {
    time: number;
    id: TradeId;
}
declare type OrderbookItem = OrderBase;
interface Orderbook {
    bids: OrderbookItem[];
    asks: OrderbookItem[];
}
interface DataFromPublicAgentToCenter {
    trades?: Trade[];
    orderbook?: Orderbook;
}
interface DataFromSecretaryToCenter {
    value: any;
    record: boolean;
}
export { Action, Order, OrderId, Trade, Orderbook, DataFromPublicAgentToCenter, DataFromSecretaryToCenter, };
