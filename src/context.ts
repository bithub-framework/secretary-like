import { EventEmitter } from 'events';
import {
    LimitOrder,
    OpenOrder,
    OrderId,
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
import Big from 'big.js';

export interface ContextLike {
    [marketId: number]: ContextMarketLike;
    sleep: (ms: number) => Promise<void>;
    setTimeout: (cb: () => void, ms: number) => any,
    clearTimeout: (timerId: any) => void,
    now: () => number;
    escape: <T>(v: Promise<T>) => Promise<T>;
    /**
     * @param value Serializable into JSON
     */
    submit(key: string, value: unknown): Promise<void>;
}

export interface ContextMarketLike extends
    ContextMarketPublicApiLike,
    MarketConfig {
    [accountId: number]: ContextAccountLike;
}

export interface ContextAccountLike extends
    ContextAccountPrivateApiLike,
    AccountConfig { }

export interface ContextMarketPublicApiLike extends EventEmitter {
    on(event: 'orderbook', listener: (orderbook: Orderbook) => void): this;
    on(event: 'trades', listener: (trades: Trade[]) => void): this;
    off(event: 'orderbook', listener: (orderbook: Orderbook) => void): this;
    off(event: 'trades', listener: (trades: Trade[]) => void): this;
    once(event: 'orderbook', listener: (orderbook: Orderbook) => void): this;
    once(event: 'trades', listener: (trades: Trade[]) => void): this;
}

export interface ContextAccountPrivateApiLike extends EventEmitter {
    makeLimitOrders(orders: LimitOrder[]): Promise<OrderId[]>;
    getOpenOrders(): Promise<OpenOrder[]>;
    /**
     * @returns Unfilled quantity
     */
    cancelOrders(orderIds: OrderId[]): Promise<Big[]>;
    getPositions(): Promise<Positions>;
    getBalances(): Promise<Balances>;
    /**
     * @returns Unfilled quantities before amendments
     */
    amendLimitOrders(amendments: LimitOrderAmendment[]): Promise<Big[]>;

    on(event: 'positions', listener: (positions: Positions) => void): this;
    on(event: 'balances', listener: (balances: Balances) => void): this;
    off(event: 'positions', listener: (positions: Positions) => void): this;
    off(event: 'balances', listener: (balances: Balances) => void): this;
    once(event: 'positions', listener: (positions: Positions) => void): this;
    once(event: 'balances', listener: (balances: Balances) => void): this;
}
