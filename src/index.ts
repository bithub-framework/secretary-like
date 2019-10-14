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
type OrderId = string;

interface Order extends OrderBase {
    id?: OrderId;
    time?: number;
}

interface Trade extends OrderBase {
    time: number;
    id: number;
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
    Trade,
    Orderbook,
    PublicDataFromAgentToCenter,
    TradingDataFromSecretaryToCenter,
    Assets,
}