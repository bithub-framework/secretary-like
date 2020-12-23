import Big from 'big.js';
export declare type OrderId = number | string;
export declare const enum Side {
    BID = 1,
    ASK = -1
}
export declare const BID = Side.BID;
export declare const ASK = Side.ASK;
export interface LimitOrder {
    side: Side;
    price: Big;
    quantity: Big;
    open: boolean;
}
export interface OpenOrder extends LimitOrder {
    id: OrderId;
}
export declare type TradeId = number | string;
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
    side: Side;
}
export interface Orderbook {
    [side: number]: MakerOrder[];
    time: number;
}
export declare const enum Length {
    LONG = 1,
    SHORT = -1
}
export declare const LONG: Length;
export declare const SHORT: Length;
export interface Assets {
    position: {
        [length: number]: Big;
    };
    leverage: number;
    balance: Big;
    cost: {
        [length: number]: Big;
    };
    frozenFee: Big;
    frozenMargin: Big;
    frozenPosition: Big;
    margin: Big;
    reserve: Big;
}
