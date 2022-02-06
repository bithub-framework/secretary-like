import { LimitOrder, OpenOrder, Orderbook, Trade, Positions, Balances, Amendment } from './data';
import { MarketSpec, AccountSpec, MarketCalc } from './specification';
import { Timeline } from './timeline';
import { GenericEvents, TypedEventEmitter } from 'typed-event-emitter';
export interface ContextLike {
    [marketIndex: number]: ContextMarketLike;
    timeline: Timeline;
    /** @param value Serializable into JSON */
    submit(key: string, value: any): Promise<void>;
}
export interface ContextMarketLike extends ContextMarketApiLike {
    [accountIndex: number]: ContextAccountLike;
    spec: MarketSpec;
    calc: MarketCalc;
}
export interface ContextAccountLike extends ContextAccountApiLike {
    spec: AccountSpec;
}
export interface MarketEvents extends GenericEvents {
    orderbook: [Orderbook];
    trades: [Trade[]];
    error: [Error];
}
export declare type ContextMarketApiLike = TypedEventEmitter<MarketEvents>;
export interface AccountEvents extends GenericEvents {
    positions: [Positions];
    balances: [Balances];
    error: [Error];
}
export interface ContextAccountApiLike extends TypedEventEmitter<AccountEvents> {
    makeOrders(orders: LimitOrder[]): Promise<(OpenOrder | Error)[]>;
    amendOrders(amendments: Amendment[]): Promise<(OpenOrder | Error)[]>;
    getOpenOrders(): Promise<OpenOrder[]>;
    cancelOrders(orders: OpenOrder[]): Promise<OpenOrder[]>;
    getPositions(): Promise<Positions>;
    getBalances(): Promise<Balances>;
}
