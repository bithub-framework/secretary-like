import Big from 'big.js';
export declare function Side(side: Side): Side;
export declare function Side(operation: Operation, Length: Length): Side;
export declare function Side(Length: Length, operation: Operation): Side;
export declare namespace Side {
    const BID: "BID";
    const ASK: "ASK";
}
export declare type Side = typeof Side.BID | typeof Side.ASK;
export declare function Operation(operation: Operation): Operation;
export declare function Operation(side: Side, length: Length): Operation;
export declare function Operation(length: Length, side: Side): Operation;
export declare namespace Operation {
    const OPEN: "OPEN";
    const CLOSE: "CLOSE";
}
export declare type Operation = typeof Operation.OPEN | typeof Operation.CLOSE;
export declare type Length = typeof Length.LONG | typeof Length.SHORT;
export declare function Length(length: Length): Length;
export declare function Length(side: Side, operation: Operation): Length;
export declare function Length(operation: Operation, side: Side): Length;
export declare namespace Length {
    const LONG = "LONG";
    const SHORT = "SHORT";
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
