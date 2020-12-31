import Big from 'big.js';
export declare type Mutable<T> = {
    -readonly [P in keyof T]: T[P];
};
export declare type Side = number;
export declare const BID: Side;
export declare const ASK: Side;
export declare type Operation = number;
export declare const OPEN: Operation;
export declare const CLOSE: Operation;
export declare type Length = number;
export declare const LONG: Length;
export declare const SHORT: Length;
export declare type OrderId = number | string;
export declare type TradeId = number | string;
export interface LimitOrder {
    price: Big;
    quantity: Big;
    side: Side;
    length: Length;
    operation: Operation;
}
export declare namespace LimitOrder {
    type Computed = 'side';
    type Statics = Omit<LimitOrder, Computed>;
    export function from(statics: Statics): LimitOrder;
    export {};
}
export interface OpenOrder extends LimitOrder {
    id: OrderId;
}
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
export interface Assets {
    balance: Big;
    position: {
        [length: number]: Big;
    };
    reserve: Big;
    closable: {
        [length: number]: Big;
    };
    time: number;
}
