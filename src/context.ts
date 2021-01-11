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
import Big from 'big.js';

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
    makeLimitOrders(orders: LimitOrder[]): Promise<void>;
    getOpenOrders(): Promise<OpenOrder[]>;
    cancelOrders(orderIds: OrderId[]): Promise<(Big | null)[]>;
    getPositions(): Promise<Positions>;
    getBalances(): Promise<Balances>;

    /* 
        返回数组的第一个值可能为
            订单修改之前瞬间的 filled 值
            订单修改之前瞬间的 filled 值 + 订单修改后吃单量
        返回数组的第二个值可能为
            订单修改之后瞬间的 filled 值
            订单修改之后瞬间的 filled 值 + 订单修改后吃单量
        具体是哪个因交易所而不同，因此通用策略务必只在能确保订单修改后
        不会吃单的情况下才使用这两个值
    */
    remakeLimitOrders(orders: LimitOrder[]): Promise<[Big | null, Big][]>;

    on(event: 'positions', listener: (positions: Positions) => void): this;
    on(event: 'balances', listener: (balances: Balances) => void): this;
    off(event: 'positions', listener: (positions: Positions) => void): this;
    off(event: 'balances', listener: (balances: Balances) => void): this;
    once(event: 'positions', listener: (positions: Positions) => void): this;
    once(event: 'balances', listener: (balances: Balances) => void): this;
}
