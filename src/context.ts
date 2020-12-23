import { EventEmitter } from 'events';
import {
    LimitOrder,
    OrderId,
    OpenOrder,
    Assets,
    Orderbook,
    Trade,
} from './data';

export interface ContextLike {
    [marketId: number]: ContextMarketLike;
    sleep: (ms: number) => Promise<void>;
    now: () => number;
}

export interface ContextMarketLike extends ContextMarketPublicApiLike {
    [accountId: number]: ContextAccountLike;
}

export interface ContextAccountLike extends ContextAccountPrivateApiLike { }

export interface ContextMarketPublicApiLike extends EventEmitter {
    on(event: 'orderbook', orderbook: Orderbook): this;
    on(event: 'trades', trades: Trade[]): this;
    on(event: string | symbol, listener: (...args: any[]) => void): this;
}

export interface ContextAccountPrivateApiLike {
    makeLimitOrder(order: LimitOrder): Promise<OrderId>;
    getOpenOrders(): Promise<OpenOrder[]>;
    cancelOrder(orderId: OrderId): Promise<void>;
    getAssets(): Promise<Assets>;
}
