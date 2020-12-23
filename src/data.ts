import Big from 'big.js';

export type OrderId = number | string;

// 常数不是任意指定的，必须一个是 0 另一个是 1
export const enum Side {
    BID = 1,
    ASK = -1,
}
export const BID = Side.BID;
export const ASK = Side.ASK;

export interface LimitOrder {
    side: Side;
    price: Big;
    quantity: Big;
    open: boolean;
}

export interface OpenOrder extends LimitOrder {
    id: OrderId;
}

export type TradeId = number | string;

export interface Trade {
    side: Side;
    price: Big;
    quantity: Big;
    time: number;
    id: TradeId;
}

export interface MakerOrder {
    price: Big;
    quantity: Big;
    side: Side,
}

export interface Orderbook {
    [BID]: MakerOrder[],
    [ASK]: MakerOrder[],
    time: number;
}

export const enum Length {
    LONG = -1,
    SHORT = 1,
}
export const LONG = Length.LONG;
export const SHORT = Length.SHORT;

export interface Assets {
    position: {
        [LONG]: Big;
        [SHORT]: Big;
    };
    balance: Big;
    cost: {
        [LONG]: Big;
        [SHORT]: Big;
    };
    frozenMargin: Big;
    frozenPosition: {
        [LONG]: Big;
        [SHORT]: Big;
    };

    // computed
    margin: Big; // = cost / leverage
    reserve: Big; // = balance - margin - frozen
}
