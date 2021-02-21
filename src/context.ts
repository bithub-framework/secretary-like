import {
    LimitOrder,
    OpenOrder,
    Orderbook,
    Trade,
    Positions,
    Balances,
    LimitOrderAmendment,
} from './data';
import {
    MarketConfig,
    AccountConfig,
} from './config';
import { EventEmitter } from 'events';

export interface ContextLike {
    [marketId: number]: ContextMarketLike;
    sleep: (ms: number) => Promise<void>;
    setTimeout: (cb: () => void, ms: number) => any,
    clearTimeout: (timerId: any) => void,
    now: () => number;
    escape: <T>(promise: Promise<T>) => Promise<T>;
    /** @param value Serializable into JSON */
    submit(key: string, value: unknown): Promise<void>;
}

export interface ContextMarketLike extends
    ContextMarketApiLike,
    MarketConfig {
    [accountId: number]: ContextAccountLike;
}

export interface ContextAccountLike extends
    ContextAccountApiLike,
    AccountConfig { }

export type MarketEvents = {
    orderbook: [Orderbook];
    trades: [Trade[]];
}

export interface ContextMarketApiLike extends EventEmitter {
    on<Event extends keyof MarketEvents>(event: Event, listener: (...args: MarketEvents[Event]) => void): this;
    once<Event extends keyof MarketEvents>(event: Event, listener: (...args: MarketEvents[Event]) => void): this;
    off<Event extends keyof MarketEvents>(event: Event, listener: (...args: MarketEvents[Event]) => void): this;
    emit<Event extends keyof MarketEvents>(event: Event, ...args: MarketEvents[Event]): boolean;
    on(event: string | symbol, listener: (...args: any[]) => void): this;
    once(event: string | symbol, listener: (...args: any[]) => void): this;
    off(event: string | symbol, listener: (...args: any[]) => void): this;
    emit(event: string | symbol, ...args: any[]): boolean;
}

// export interface ContextMarketPublicApiLike extends EventEmitter {
//     on(event: 'orderbook', listener: (orderbook: Orderbook) => void): this;
//     on(event: 'trades', listener: (trades: Trade[]) => void): this;
//     off(event: 'orderbook', listener: (orderbook: Orderbook) => void): this;
//     off(event: 'trades', listener: (trades: Trade[]) => void): this;
//     once(event: 'orderbook', listener: (orderbook: Orderbook) => void): this;
//     once(event: 'trades', listener: (trades: Trade[]) => void): this;
//     emit(event: 'orderbook', orderbook: Orderbook): boolean;
//     emit(event: 'trades', trades: Trade[]): boolean;
// }

export type AccountEvents = {
    positions: Positions;
    balances: Balances;
}

export interface ContextAccountApiLike extends EventEmitter {
    makeLimitOrders(orders: LimitOrder[]): Promise<OpenOrder[]>;
    getOpenOrders(): Promise<OpenOrder[]>;
    cancelOrders(orders: OpenOrder[]): Promise<OpenOrder[]>;
    getPositions(): Promise<Positions>;
    getBalances(): Promise<Balances>;
    amendLimitOrders(amendments: LimitOrderAmendment[]): Promise<OpenOrder[]>;

    on<Event extends keyof MarketEvents>(event: Event, listener: (...args: MarketEvents[Event]) => void): this;
    once<Event extends keyof MarketEvents>(event: Event, listener: (...args: MarketEvents[Event]) => void): this;
    off<Event extends keyof MarketEvents>(event: Event, listener: (...args: MarketEvents[Event]) => void): this;
    emit<Event extends keyof MarketEvents>(event: Event, ...args: MarketEvents[Event]): boolean;
    on(event: string | symbol, listener: (...args: any[]) => void): this;
    once(event: string | symbol, listener: (...args: any[]) => void): this;
    off(event: string | symbol, listener: (...args: any[]) => void): this;
    emit(event: string | symbol, ...args: any[]): this;
}

// export interface ContextAccountPrivateApiLike extends EventEmitter {
//     makeLimitOrders(orders: LimitOrder[]): Promise<OpenOrder[]>;
//     getOpenOrders(): Promise<OpenOrder[]>;
//     cancelOrders(orders: OpenOrder[]): Promise<OpenOrder[]>;
//     getPositions(): Promise<Positions>;
//     getBalances(): Promise<Balances>;
//     amendLimitOrders(amendments: LimitOrderAmendment[]): Promise<OpenOrder[]>;

//     on(event: 'positions', listener: (positions: Positions) => void): this;
//     on(event: 'balances', listener: (balances: Balances) => void): this;
//     off(event: 'positions', listener: (positions: Positions) => void): this;
//     off(event: 'balances', listener: (balances: Balances) => void): this;
//     once(event: 'positions', listener: (positions: Positions) => void): this;
//     once(event: 'balances', listener: (balances: Balances) => void): this;
//     emit(event: 'positions', positions: Positions): boolean;
//     emit(event: 'balances', balances: Balances): boolean;
// }
