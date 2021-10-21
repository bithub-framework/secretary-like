import Big from 'big.js';

export type Side = number;
export type Operation = number;
export type Length = number;
export namespace Side {
    export const BID: Side = 1;
    export const ASK: Side = -1;
}
export namespace Operation {
    export const OPEN: Operation = 1;
    export const CLOSE: Operation = -1;
}
export namespace Length {
    export const LONG: Length = 1;
    export const SHORT: Length = -1;
}


export type TradeId = number | string;
export type OrderId = number | string;

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

export interface Amendment extends OpenOrder {
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
    side: Side,
}

export interface Orderbook {
    [side: number]: BookOrder[];
    time: number;
}

export interface Closable {
    [length: number]: Big;
}

export interface Position {
    [length: number]: Big;
}

export interface Positions {
    position: Position;
    closable: Closable;
    time: number;
}

export interface Balances {
    balance: Big;
    available: Big;
    time: number;
}
