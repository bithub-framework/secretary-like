/// <reference types="node" />
import { LimitOrder, OpenOrder, Orderbook, Trade, Positions, Balances, Amendment } from './data';
import { MarketConfig, AccountConfig } from './config';
import { EventEmitter } from 'events';
export interface ContextLike {
    [marketIndex: number]: ContextMarketLike;
    sleep: (ms: number) => Promise<void>;
    setTimeout: (cb: () => void, ms: number) => any;
    clearTimeout: (timerId: any) => void;
    now: () => number;
    escape: <T>(promise: Promise<T>) => Promise<T>;
    /** @param value Serializable into JSON */
    submit(key: string, value: unknown): Promise<void>;
}
export interface ContextMarketLike extends ContextMarketApiLike, MarketConfig {
    [accountIndex: number]: ContextAccountLike;
}
export interface ContextAccountLike extends ContextAccountApiLike, AccountConfig {
}
export declare type MarketEvents = {
    orderbook: [Orderbook];
    trades: [Trade[]];
    error: [Error];
};
export interface ContextMarketApiLike extends EventEmitter {
    on<Event extends keyof MarketEvents>(event: Event, listener: (...args: MarketEvents[Event]) => void): this;
    once<Event extends keyof MarketEvents>(event: Event, listener: (...args: MarketEvents[Event]) => void): this;
    off<Event extends keyof MarketEvents>(event: Event, listener: (...args: MarketEvents[Event]) => void): this;
    emit<Event extends keyof MarketEvents>(event: Event, ...args: MarketEvents[Event]): boolean;
}
export declare type AccountEvents = {
    positions: [Positions];
    balances: [Balances];
    error: [Error];
};
export interface ContextAccountApiLike extends EventEmitter {
    makeOrders(orders: LimitOrder[]): Promise<(OpenOrder | Error)[]>;
    amendOrders(amendments: Amendment[]): Promise<(OpenOrder | Error)[]>;
    getOpenOrders(): Promise<OpenOrder[]>;
    cancelOrders(orders: OpenOrder[]): Promise<OpenOrder[]>;
    getPositions(): Promise<Positions>;
    getBalances(): Promise<Balances>;
    on<Event extends keyof AccountEvents>(event: Event, listener: (...args: AccountEvents[Event]) => void): this;
    once<Event extends keyof AccountEvents>(event: Event, listener: (...args: AccountEvents[Event]) => void): this;
    off<Event extends keyof AccountEvents>(event: Event, listener: (...args: AccountEvents[Event]) => void): this;
    emit<Event extends keyof AccountEvents>(event: Event, ...args: AccountEvents[Event]): boolean;
}
