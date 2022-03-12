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
    readonly price: Big;
    readonly quantity: Big;
    readonly side: Side;
    readonly length: Length;
    readonly operation: Operation;
}
export declare namespace LimitOrder {
    interface MutablePlain {
        price: Big;
        quantity: Big;
        side: Side;
        length: Length;
        operation: Operation;
    }
}
export interface OpenOrder extends LimitOrder {
    readonly filled: Big;
    readonly unfilled: Big;
    readonly id: OrderId;
}
export declare namespace OpenOrder {
    interface MutablePlain extends LimitOrder.MutablePlain {
        filled: Big;
        unfilled: Big;
        id: OrderId;
    }
}
export interface Amendment extends OpenOrder {
    readonly newUnfilled: Big;
    readonly newPrice: Big;
}
export declare namespace Amendment {
    interface MutablePlain extends OpenOrder.MutablePlain {
        newUnfilled: Big;
        newPrice: Big;
    }
}
export interface OpenMaker extends OpenOrder {
    readonly behind: Big;
}
export declare namespace OpenMaker {
    interface MutablePlain extends OpenOrder.MutablePlain {
        behind: Big;
    }
}
export interface Trade {
    readonly side: Side;
    readonly price: Big;
    readonly quantity: Big;
    readonly time: number;
    readonly id: TradeId;
}
export declare namespace Trade {
    interface MutablePlain {
        side: Side;
        price: Big;
        quantity: Big;
        time: number;
        id: TradeId;
    }
}
export interface BookOrder {
    readonly price: Big;
    readonly quantity: Big;
    readonly side: Side;
}
export declare namespace BookOrder {
    interface MutablePlain {
        price: Big;
        quantity: Big;
        side: Side;
    }
}
export interface Orderbook {
    readonly [side: number]: readonly BookOrder[];
    readonly time: number;
}
export declare namespace Orderbook {
    interface MutablePlain {
        [side: number]: BookOrder.MutablePlain[];
        time: number;
    }
}
export interface Closable {
    readonly [length: number]: Big;
}
export declare namespace Closable {
    interface MutablePlain {
        [length: number]: Big;
    }
}
export interface Position {
    readonly [length: number]: Big;
}
export declare namespace Position {
    interface MutablePlain {
        [length: number]: Big;
    }
}
export interface Positions {
    readonly position: Position;
    readonly closable: Closable;
    readonly time: number;
}
export declare namespace Positions {
    interface MutablePlain {
        position: Position.MutablePlain;
        closable: Closable.MutablePlain;
        time: number;
    }
}
export interface Balances {
    readonly balance: Big;
    readonly available: Big;
    readonly time: number;
}
export declare namespace Balances {
    interface MutablePlain {
        balance: Big;
        available: Big;
        time: number;
    }
}
