/// <reference types="node" />
import { EventEmitter } from 'events';
import { LimitOrder, OrderId, OpenOrder, Assets } from './data';
export interface ContextLike {
    [marketId: number]: ContextMarketLike;
    sleep: (ms: number) => Promise<void>;
}
export interface ContextMarketLike extends ContextMarketPublicApiLike {
    [accountId: number]: ContextAccountLike;
}
export interface ContextAccountLike extends ContextAccountPrivateApiLike {
}
export interface ContextMarketPublicApiLike extends EventEmitter {
}
export interface ContextAccountPrivateApiLike {
    makeLimitOrder(order: LimitOrder): Promise<OrderId>;
    getOpenOrders(): Promise<OpenOrder[]>;
    cancelOrder(orderId: OrderId): Promise<void>;
    getAssets(): Promise<Assets>;
}
