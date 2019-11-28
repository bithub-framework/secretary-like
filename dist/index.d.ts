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
interface Orderbook {
    bids: Order[];
    asks: Order[];
}
interface PublicDataFromAgentToCenter {
    trades?: Trade[];
    orderbook?: Orderbook;
}
declare type Assets = {
    spot?: number;
    long?: number;
    short?: number;
    cash?: number;
    time?: number;
};
interface DataFromSecretaryToCenter {
    value: any;
    record: boolean;
}
export { Action, Order, OrderId, Trade, Orderbook, PublicDataFromAgentToCenter, DataFromSecretaryToCenter, Assets, };
