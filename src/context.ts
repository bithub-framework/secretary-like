import { EventEmitter } from 'events';
import {
    LimitOrder,
    OrderId,
    OpenOrder,
    Assets,
    Orderbook,
    Trade,
    Positions,
    Balances,
} from './data';
import {
    MarketConfig,
    AccountConfig,
} from './config';

export interface ContextLike {
    [marketId: number]: ContextMarketLike;
    sleep: (ms: number) => Promise<void>;
    setTimeout: (cb: () => void, ms: number) => any,
    clearTimeout: (timerId: any) => void,
    now: () => number;
    escape: <T>(v: T) => Promise<T>;
    submitAssets(assets: Assets): Promise<void>;
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
    makeLimitOrder(order: LimitOrder): Promise<OrderId>;
    getOpenOrders(): Promise<OpenOrder[]>;
    cancelOrder(orderId: OrderId): Promise<OpenOrder | null>;
    getPositions(): Promise<Positions>;
    getBalances(): Promise<Balances>;
    remakeLimitOrder(oid: OrderId, order: LimitOrder): Promise<OrderId>;

    on(event: 'positions', listener: (positions: Positions) => void): this;
    on(event: 'balances', listener: (balances: Balances) => void): this;
    off(event: 'positions', listener: (positions: Positions) => void): this;
    off(event: 'balances', listener: (balances: Balances) => void): this;
    once(event: 'positions', listener: (positions: Positions) => void): this;
    once(event: 'balances', listener: (balances: Balances) => void): this;
}
