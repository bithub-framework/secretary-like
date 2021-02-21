/// <reference types="node" />
import { LimitOrder, OpenOrder, Orderbook, Trade, Positions, Balances, LimitOrderAmendment } from './data';
import { MarketConfig, AccountConfig } from './config';
import { EventEmitter } from 'events';
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
export interface ContextMarketLike extends ContextMarketApiLike, MarketConfig {
    [accountId: number]: ContextAccountLike;
}
export interface ContextAccountLike extends ContextAccountApiLike, AccountConfig {
}
export declare type MarketEvents = {
    orderbook: Orderbook;
    trades: Trade[];
};
export interface ContextMarketApiLike extends EventEmitter {
    on<Event extends keyof MarketEvents>(event: Event, listener: (arg: MarketEvents[Event]) => void): this;
    once<Event extends keyof MarketEvents>(event: Event, listener: (arg: MarketEvents[Event]) => void): this;
    off<Event extends keyof MarketEvents>(event: Event, listener: (arg: MarketEvents[Event]) => void): this;
    emit<Event extends keyof MarketEvents>(event: Event, arg: MarketEvents[Event]): boolean;
}
export declare type AccountEvents = {
    positions: Positions;
    balances: Balances;
};
export interface ContextAccountApiLike extends EventEmitter {
    makeLimitOrders(orders: LimitOrder[]): Promise<OpenOrder[]>;
    getOpenOrders(): Promise<OpenOrder[]>;
    cancelOrders(orders: OpenOrder[]): Promise<OpenOrder[]>;
    getPositions(): Promise<Positions>;
    getBalances(): Promise<Balances>;
    amendLimitOrders(amendments: LimitOrderAmendment[]): Promise<OpenOrder[]>;
    on<Event extends keyof MarketEvents>(event: Event, listener: (arg: MarketEvents[Event]) => void): this;
    once<Event extends keyof MarketEvents>(event: Event, listener: (arg: MarketEvents[Event]) => void): this;
    off<Event extends keyof MarketEvents>(event: Event, listener: (arg: MarketEvents[Event]) => void): this;
    emit<Event extends keyof MarketEvents>(event: Event, arg: MarketEvents[Event]): boolean;
}
