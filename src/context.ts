import { EventEmitter } from 'events';
import { QueueLike } from 'queue';
import {
    Orderbook,
    LimitOrder,
    OrderId,
    OpenOrder,
    Trade,
} from './data';

// Context

export interface ContextLike {
    [marketId: number]: ContextMarketLike;
    sleep: (ms: number) => Promise<void>;
    next: () => Promise<void>;
}

export interface ContextMarketLike extends ContextMarketPublicApiLike {
    [accountId: number]: ContextAccountLike;
}

export interface ContextAccountLike extends ContextAccountPrivateApiLike { }

export interface ContextMarketPublicApiLike extends EventEmitter {
    orderbook: Orderbook;
    trades: QueueLike<Trade>;
}

export interface ContextAccountPrivateApiLike {
    makeLimitOrder(order: LimitOrder): Promise<OrderId>;
    // getOrder(orderId: OrderId): Promise<Order>;
    getOpenOrders(): Promise<OpenOrder[]>;
    cancelOrder(orderId: OrderId): Promise<void>;
    // getAccount(): Promise<void>;
}
