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

type OrderbookItem = OrderBase;

interface Orderbook {
    bids: OrderbookItem[],
    asks: OrderbookItem[],
    time: number;
}

interface DataFromPublicAgentToCenter {
    trades?: Trade[],
    orderbook?: Orderbook,
}

interface DataFromSecretaryToCenter {
    value: any;
    record: boolean;
};

export {
    Action,
    Order,
    OrderId,
    Trade,
    Orderbook,
    DataFromPublicAgentToCenter,
    DataFromSecretaryToCenter,
}