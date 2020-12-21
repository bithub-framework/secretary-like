import Big from 'big.js';
// @ts-ignore
Big.strict = true;

export type OrderId = number | string;

// 常数不是任意指定的，必须 ASK 为 0，BID 为 1。
export const enum Side {
    ASK = 0,
    BID = 1,
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
    frozen: Big;
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
    [side: number]: MakerOrder[],
    time: number;
}

export const enum Length {
    LONG = Side.BID,
    SHORT = Side.ASK,
}
export const LONG = Length.LONG;
export const SHORT = Length.SHORT;

export interface Assets {
    position: {
        [length: number]: Big;
    };
    leverage: number;
    balance: Big;
    cost: {
        [length: number]: Big;
    };
    frozen: Big;

    // computed
    margin: Big; // = cost / leverage
    reserve: Big; // = balance - margin - frozen
}
