enum Action {
    BID = 'bid',
    ASK = 'ask',
}

interface OrderBase {
    action: Action;
    price: number;
    amount: number;
}

// 有的交易所 orderId 大于 Number.MAX_SAFE_INTEGER
type OrderId = unknown;

interface Order extends OrderBase {
    id?: OrderId;
    time?: number;
}

type TradeId = unknown;

interface Trade extends OrderBase {
    time: number;
    id: TradeId;
}

interface Orderbook {
    bids: Order[],
    asks: Order[],
}

interface PublicDataFromAgentToCenter {
    trades?: Trade[],
    orderbook?: Orderbook,
}

type Assets = {
    spot?: number;
    long?: number;
    short?: number;
    cash?: number;
    time?: number;
};

interface TradingDataFromSecretaryToCenter {
    assets?: Assets;
    trade?: Trade;
};

export {
    Action,
    Order,
    OrderId,
    Trade,
    Orderbook,
    PublicDataFromAgentToCenter,
    TradingDataFromSecretaryToCenter,
    Assets,
}