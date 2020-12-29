import Big from 'big.js';
import { RoundingMode } from 'big.js';

export type Mutable<T> = {
    -readonly [P in keyof T]: T[P];
};

export type Side = number;
export const BID: Side = 1;
export const ASK: Side = -1;

export type Operation = number;
export const OPEN: Operation = 1;
export const CLOSE: Operation = -1;

export type Length = number;
export const LONG: Length = 1;
export const SHORT: Length = -1;

export type OrderId = number | string;
export type TradeId = number | string;

export interface LimitOrder {
    price: Big;
    quantity: Big;
    side: Side;
    length: Length;
    operation: Operation;
}

export namespace LimitOrder {
    type Computed = 'side';
    type Statics = Omit<LimitOrder, Computed>;
    export function from(statics: Statics): LimitOrder {
        return {
            side: statics.length * statics.operation,
            operation: statics.operation,
            length: statics.length,
            price: statics.price,
            quantity: statics.quantity,
        }
    }
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
    side: Side,
}

export interface Orderbook {
    [side: number]: MakerOrder[],
    time: number;
}

export interface Assets {
    position: {
        [length: number]: Big;
    };
    balance: Big;
    cost: {
        [length: number]: Big;
    };
    frozenMargin: Big;
    frozenPosition: {
        [length: number]: Big;
    };
    time: number;

    // computed
    margin: Big;
    reserve: Big;
    closable: {
        [length: number]: Big;
    };
}
