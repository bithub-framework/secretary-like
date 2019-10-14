declare enum Action {
    BID = "bid",
    ASK = "ask"
}
interface OrderBase {
    action: Action;
    price: number;
    amount: number;
}
declare type OrderId = string;
interface Order extends OrderBase {
    id?: OrderId;
    time?: number;
}
interface Trade extends OrderBase {
    time: number;
    id: number;
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
interface TradingDataFromSecretaryToCenter {
    assets?: Assets;
    trade?: Trade;
}
export { Action, Order, OrderId, Trade, Orderbook, PublicDataFromAgentToCenter, TradingDataFromSecretaryToCenter, Assets, };
