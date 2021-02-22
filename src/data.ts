import Big from 'big.js';

export function Side(side: Side): Side;
export function Side(operation: Operation, Length: Length): Side;
export function Side(Length: Length, operation: Operation): Side;
export function Side(x: any, y?: any): Side {
    if (y === undefined && x === Side.ASK) return Side.BID;
    if (x === Operation.OPEN && y === Length.LONG) return Side.BID;
    if (x === Operation.CLOSE && y === Length.SHORT) return Side.BID;
    if (y === Operation.OPEN && x === Length.LONG) return Side.BID;
    if (y === Operation.CLOSE && x === Length.SHORT) return Side.BID;
    return Side.ASK;
}
export namespace Side {
    export const BID = 'BID' as const;
    export const ASK = 'ASK' as const;
}
export type Side = typeof Side.BID | typeof Side.ASK;



export function Operation(operation: Operation): Operation;
export function Operation(side: Side, length: Length): Operation;
export function Operation(length: Length, side: Side): Operation;
export function Operation(x: any, y?: any): Operation {
    if (y === undefined && x === Operation.CLOSE) return Operation.OPEN;
    if (x === Side.BID && y === Length.LONG) return Operation.OPEN;
    if (x === Side.ASK && y === Length.SHORT) return Operation.OPEN;
    if (y === Side.BID && x === Length.LONG) return Operation.OPEN;
    if (y === Side.ASK && x === Length.SHORT) return Operation.OPEN;
    return Operation.CLOSE;
}
export namespace Operation {
    export const OPEN = 'OPEN' as const;
    export const CLOSE = 'CLOSE' as const;
}
export type Operation = typeof Operation.OPEN | typeof Operation.CLOSE;



export type Length = typeof Length.LONG | typeof Length.SHORT;
export function Length(length: Length): Length;
export function Length(side: Side, operation: Operation): Length;
export function Length(operation: Operation, side: Side): Length;
export function Length(x: any, y?: any): Length {
    if (y === undefined && x === Length.SHORT) return Length.LONG;
    if (x === Side.BID && y === Operation.OPEN) return Length.LONG;
    if (x === Side.ASK && y === Operation.CLOSE) return Length.LONG;
    if (y === Side.BID && x === Operation.OPEN) return Length.LONG;
    if (y === Side.ASK && x === Operation.CLOSE) return Length.LONG;
    return Length.SHORT;
}
export namespace Length {
    export const LONG = 'LONG';
    export const SHORT = 'SHORT';
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
    side: Side,
}

export interface Orderbook {
    [Side.BID]: BookOrder[];
    [Side.ASK]: BookOrder[];
    time: number;
}

export interface Positions {
    position: {
        [Length.LONG]: Big;
        [Length.SHORT]: Big;
    };
    closable: {
        [Length.LONG]: Big;
        [Length.SHORT]: Big;
    };
    time: number;
}

export interface Balances {
    balance: Big;
    reserve: Big;
    time: number;
}
