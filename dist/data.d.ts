import Big from 'big.js';
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
export declare namespace LimitOrder {
    type Config = Omit<LimitOrder, 'length'>;
}
export declare class LimitOrder {
    side: Side;
    operation: Operation;
    price: Big;
    quantity: Big;
    constructor(config: LimitOrder.Config);
    get length(): number;
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
export declare namespace Assets {
    type Config = Omit<Assets, 'margin' | 'reserve'> & {
        leverage: number;
        CURRENCY_DP: number;
    };
}
export declare class Assets {
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
    private leverage;
    private CURRENCY_DP;
    constructor(config: Assets.Config);
    get margin(): Big;
    get reserve(): Big;
    get closable(): {
        [x: number]: Big;
    };
}
