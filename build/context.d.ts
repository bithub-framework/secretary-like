/// <reference types="node" />
import { LimitOrder, OpenOrder, Orderbook, Trade, Positions, Balances, Amendment } from './data';
import { MarketSpec, AccountSpec, MarketCalc } from './specification';
import { Timeline } from './timeline';
import { EventEmitter } from 'events';
export interface ContextLike {
    readonly [marketIndex: number]: ContextMarketLike;
    readonly timeline: Timeline;
    /** @param value Serializable into JSON */
    submit(key: string, value: any): Promise<void>;
}
export interface ContextMarketLike extends ContextMarketApiLike {
    readonly [accountIndex: number]: ContextAccountLike;
    readonly spec: MarketSpec;
    readonly calc: MarketCalc;
}
export interface ContextAccountLike extends ContextAccountApiLike {
    readonly spec: AccountSpec;
}
export interface MarketEvents {
    orderbook: [Orderbook.MutablePlain];
    trades: [Trade.MutablePlain[]];
    error: [Error];
}
export interface ContextMarketApiLike extends EventEmitter {
    on<Event extends keyof MarketEvents>(event: Event, listener: (...args: MarketEvents[Event]) => void): this;
    once<Event extends keyof MarketEvents>(event: Event, listener: (...args: MarketEvents[Event]) => void): this;
    off<Event extends keyof MarketEvents>(event: Event, listener: (...args: MarketEvents[Event]) => void): this;
    emit<Event extends keyof MarketEvents>(event: Event, ...args: MarketEvents[Event]): boolean;
}
export interface AccountEvents {
    positions: [Positions.MutablePlain];
    balances: [Balances.MutablePlain];
    error: [Error];
}
export interface ContextAccountApiLike extends EventEmitter {
    makeOrders(orders: readonly LimitOrder[]): Promise<(OpenOrder.MutablePlain | Error)[]>;
    amendOrders(amendments: readonly Amendment[]): Promise<(OpenOrder.MutablePlain | Error)[]>;
    getOpenOrders(): Promise<OpenOrder.MutablePlain[]>;
    cancelOrders(orders: readonly OpenOrder[]): Promise<OpenOrder.MutablePlain[]>;
    getPositions(): Promise<Positions.MutablePlain>;
    getBalances(): Promise<Balances.MutablePlain>;
    on<Event extends keyof AccountEvents>(event: Event, listener: (...args: AccountEvents[Event]) => void): this;
    once<Event extends keyof AccountEvents>(event: Event, listener: (...args: AccountEvents[Event]) => void): this;
    off<Event extends keyof AccountEvents>(event: Event, listener: (...args: AccountEvents[Event]) => void): this;
    emit<Event extends keyof AccountEvents>(event: Event, ...args: AccountEvents[Event]): boolean;
}
