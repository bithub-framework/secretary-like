import { LimitOrder, OpenOrder, Orderbook, Trade, Positions, Balances, LimitOrderAmendment } from './data';
import { MarketConfig, AccountConfig } from './config';
import { ConstEvents } from './const-events';
export interface ContextLike {
    [marketId: number]: ContextMarketLike;
    sleep: (ms: number) => Promise<void>;
    setTimeout: (cb: () => void, ms: number) => any;
    clearTimeout: (timerId: any) => void;
    now: () => number;
    escape: <T>(promise: Promise<T>) => Promise<T>;
    /** @param value Serializable into JSON */
    submit(key: string, value: unknown): Promise<void>;
}
export interface ContextMarketLike extends ContextMarketPublicApiLike, MarketConfig {
    [accountId: number]: ContextAccountLike;
}
export interface ContextAccountLike extends ContextAccountPrivateApiLike, AccountConfig {
}
export interface ContextMarketPublicApiLike extends ConstEvents<{
    orderbook: [Orderbook];
    trades: [Trade[]];
}> {
}
export interface ContextAccountPrivateApiLike extends ConstEvents<{
    positions: [Positions];
    balances: [Balances];
}> {
    makeLimitOrders(orders: LimitOrder[]): Promise<OpenOrder[]>;
    getOpenOrders(): Promise<OpenOrder[]>;
    cancelOrders(orders: OpenOrder[]): Promise<OpenOrder[]>;
    getPositions(): Promise<Positions>;
    getBalances(): Promise<Balances>;
    amendLimitOrders(amendments: LimitOrderAmendment[]): Promise<OpenOrder[]>;
}
