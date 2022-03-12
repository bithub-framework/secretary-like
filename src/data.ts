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
    readonly price: Big;
    readonly quantity: Big;
    readonly side: Side;
    readonly length: Length;
    readonly operation: Operation;
}
export namespace LimitOrder {
    export interface Mutable {
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
export namespace OpenOrder {
    export interface Mutable extends LimitOrder.Mutable {
        filled: Big;
        unfilled: Big;
        id: OrderId;
    }
}


export interface Amendment extends OpenOrder {
    readonly newUnfilled: Big;
    readonly newPrice: Big;
}
export namespace Amendment {
    export interface Mutable extends OpenOrder.Mutable {
        newUnfilled: Big;
        newPrice: Big;
    }
}


export interface OpenMaker extends OpenOrder {
    readonly behind: Big;
}
export namespace OpenMaker {
    export interface Mutable extends OpenOrder.Mutable {
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
export namespace Trade {
    export interface Mutable {
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
    readonly side: Side,
}
export namespace BookOrder {
    export interface Mutable {
        price: Big;
        quantity: Big;
        side: Side,
    }
}


export interface Orderbook {
    readonly [side: number]: readonly BookOrder[];
    readonly time: number;
}
export namespace Orderbook {
    export interface Mutable {
        [side: number]: BookOrder.Mutable[];
        time: number;
    }
}


export interface Closable {
    readonly [length: number]: Big;
}
export namespace Closable {
    export interface Mutable {
        [length: number]: Big;
    }
}


export interface Position {
    readonly [length: number]: Big;
}
export namespace Position {
    export interface Mutable {
        [length: number]: Big;
    }
}


export interface Positions {
    readonly position: Position;
    readonly closable: Closable;
    readonly time: number;
}
export namespace Positions {
    export interface Mutable {
        position: Position.Mutable;
        closable: Closable.Mutable;
        time: number;
    }
}


export interface Balances {
    readonly balance: Big;
    readonly available: Big;
    readonly time: number;
}
export namespace Balances {
    export interface Mutable {
        balance: Big;
        available: Big;
        time: number;
    }
}
