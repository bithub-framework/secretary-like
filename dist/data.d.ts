import Big from 'big.js';
export declare type Side = number;
export declare type Operation = number;
export declare type Length = number;
export declare namespace Side {
    const BID: Side;
    const ASK: Side;
}
export declare namespace Operation {
    const OPEN: Operation;
    const CLOSE: Operation;
}
export declare namespace Length {
    const LONG: Length;
    const SHORT: Length;
}
export declare type TradeId = number | string;
export declare type OrderId = number | string;
export interface LimitOrder {
    price: Big;
    quantity: Big;
    side: Side;
    length: Length;
    operation: Operation;
}
export interface OpenOrder extends LimitOrder {
    filled: Big;
    unfilled: Big;
    id: OrderId;
}
export interface LimitOrderAmendment extends OpenOrder {
    newUnfilled: Big;
    newPrice: Big;
}
export interface OpenMaker extends OpenOrder {
    behind: Big;
}
export interface Trade {
    side: Side;
    price: Big;
    quantity: Big;
    time: number;
    id: TradeId;
}
export interface BookOrder {
    price: Big;
    quantity: Big;
    side: Side;
}
export interface Orderbook {
    [side: number]: BookOrder[];
    time: number;
}
export interface Positions {
    position: {
        [length: number]: Big;
    };
    closable: {
        [length: number]: Big;
    };
    time: number;
}
export interface Balances {
    balance: Big;
    reserve: Big;
    time: number;
}
