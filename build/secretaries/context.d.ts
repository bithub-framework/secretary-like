/// <reference types="node" />
import { LimitOrder } from './data/limit-order';
import { OpenOrder } from './data/open-order';
import { Amendment } from './data/amendment';
import { Positions } from './data/positions';
import { Balances } from './data/balances';
import { Orderbook } from './data/orderbook';
import { Trade } from './data/trade';
import { HLike } from './data/h';
import { Timeline } from './timeline';
import { MarketSpec, AccountSpec, MarketCalc } from './specification';
export interface ContextLike<H extends HLike<H>, OrderId, TradeId> {
    readonly [marketIndex: number]: MarketLike<H, OrderId, TradeId>;
    readonly timeline: Timeline;
    submit(key: string, json: string): Promise<void>;
}
export interface MarketLike<H extends HLike<H>, OrderId, TradeId> extends MarketApiLike<H, OrderId, TradeId> {
    readonly [accountIndex: number]: AccountLike<H, OrderId, TradeId>;
    readonly spec: MarketSpec<H>;
    readonly calc: MarketCalc<H>;
}
export interface AccountLike<H extends HLike<H>, OrderId, TradeId> extends AccountApiLike<H, OrderId, TradeId> {
    readonly spec: AccountSpec;
    readonly events: AccountEventsLike<H, OrderId, TradeId>;
}
export interface MarketEvents<H extends HLike<H>, OrderId, TradeId> {
    orderbook: [Orderbook<H>];
    trades: [Trade<H, TradeId>[]];
    error: [Error];
}
export interface MarketApiLike<H extends HLike<H>, OrderId, TradeId> {
}
export interface MarketEventsLike<H extends HLike<H>, OrderId, TradeId> extends NodeJS.EventEmitter {
    on<Event extends keyof MarketEvents<H, OrderId, TradeId>>(event: Event, listener: (...args: MarketEvents<H, OrderId, TradeId>[Event]) => void): this;
    once<Event extends keyof MarketEvents<H, OrderId, TradeId>>(event: Event, listener: (...args: MarketEvents<H, OrderId, TradeId>[Event]) => void): this;
    off<Event extends keyof MarketEvents<H, OrderId, TradeId>>(event: Event, listener: (...args: MarketEvents<H, OrderId, TradeId>[Event]) => void): this;
    emit<Event extends keyof MarketEvents<H, OrderId, TradeId>>(event: Event, ...args: MarketEvents<H, OrderId, TradeId>[Event]): boolean;
}
export interface AccountEvents<H extends HLike<H>, OrderId, TradeId> {
    positions: [Positions<H>];
    balances: [Balances<H>];
    error: [Error];
}
export interface AccountApiLike<H extends HLike<H>, OrderId, TradeId> {
    makeOrders(orders: readonly LimitOrder<H>[]): Promise<(OpenOrder<H, OrderId> | Error)[]>;
    amendOrders(amendments: readonly Amendment<H, OrderId>[]): Promise<(OpenOrder<H, OrderId> | Error)[]>;
    getOpenOrders(): Promise<OpenOrder<H, OrderId>[]>;
    cancelOrders(orders: readonly OpenOrder<H, OrderId>[]): Promise<OpenOrder<H, OrderId>[]>;
    getPositions(): Promise<Positions<H>>;
    getBalances(): Promise<Balances<H>>;
}
export interface AccountEventsLike<H extends HLike<H>, OrderId, TradeId> extends NodeJS.EventEmitter {
    on<Event extends keyof AccountEvents<H, OrderId, TradeId>>(event: Event, listener: (...args: AccountEvents<H, OrderId, TradeId>[Event]) => void): this;
    once<Event extends keyof AccountEvents<H, OrderId, TradeId>>(event: Event, listener: (...args: AccountEvents<H, OrderId, TradeId>[Event]) => void): this;
    off<Event extends keyof AccountEvents<H, OrderId, TradeId>>(event: Event, listener: (...args: AccountEvents<H, OrderId, TradeId>[Event]) => void): this;
    emit<Event extends keyof AccountEvents<H, OrderId, TradeId>>(event: Event, ...args: AccountEvents<H, OrderId, TradeId>[Event]): boolean;
}
