/// <reference types="node" />
import { LimitOrder } from './secretaries/limit-order';
import { OpenOrder } from './secretaries/open-order';
import { Amendment } from './secretaries/amendment';
import { Positions } from './secretaries/positions';
import { Balances } from './secretaries/balances';
import { Orderbook } from './secretaries/orderbook';
import { Trade } from './secretaries/trade';
import { HLike } from './secretaries/h';
import { MarketSpec, AccountSpec, MarketCalc } from './specification';
import { Timeline } from './timeline';
import { EventEmitter } from 'events';
export interface ContextLike<H extends HLike<H>, OrderId, TradeId> {
    readonly [marketIndex: number]: ContextMarketLike<H, OrderId, TradeId>;
    readonly timeline: Timeline;
    /** @param value Serializable into JSON */
    submit(key: string, value: any): Promise<void>;
}
export interface ContextMarketLike<H extends HLike<H>, OrderId, TradeId> extends ContextMarketApiLike<H, TradeId> {
    readonly [accountIndex: number]: ContextAccountLike<H, OrderId>;
    readonly spec: MarketSpec<H>;
    readonly calc: MarketCalc<H>;
}
export interface ContextAccountLike<H extends HLike<H>, OrderId> extends ContextAccountApiLike<H, OrderId> {
    readonly spec: AccountSpec;
}
export interface MarketEvents<H extends HLike<H>, TradeId> {
    orderbook: [Orderbook.MutablePlain<H>];
    trades: [Trade.MutablePlain<H, TradeId>[]];
    error: [Error];
}
export interface ContextMarketApiLike<H extends HLike<H>, TradeId> extends EventEmitter {
    on<Event extends keyof MarketEvents<H, TradeId>>(event: Event, listener: (...args: MarketEvents<H, TradeId>[Event]) => void): this;
    once<Event extends keyof MarketEvents<H, TradeId>>(event: Event, listener: (...args: MarketEvents<H, TradeId>[Event]) => void): this;
    off<Event extends keyof MarketEvents<H, TradeId>>(event: Event, listener: (...args: MarketEvents<H, TradeId>[Event]) => void): this;
    emit<Event extends keyof MarketEvents<H, TradeId>>(event: Event, ...args: MarketEvents<H, TradeId>[Event]): boolean;
}
export interface AccountEvents<H extends HLike<H>> {
    positions: [Positions.MutablePlain<H>];
    balances: [Balances.MutablePlain<H>];
    error: [Error];
}
export interface ContextAccountApiLike<H extends HLike<H>, OrderId> extends EventEmitter {
    makeOrders(orders: readonly LimitOrder<H>[]): Promise<(OpenOrder.MutablePlain<H, OrderId> | Error)[]>;
    amendOrders(amendments: readonly Amendment<H, OrderId>[]): Promise<(OpenOrder.MutablePlain<H, OrderId> | Error)[]>;
    getOpenOrders(): Promise<OpenOrder.MutablePlain<H, OrderId>[]>;
    cancelOrders(orders: readonly OpenOrder<H, OrderId>[]): Promise<OpenOrder.MutablePlain<H, OrderId>[]>;
    getPositions(): Promise<Positions.MutablePlain<H>>;
    getBalances(): Promise<Balances.MutablePlain<H>>;
    on<Event extends keyof AccountEvents<H>>(event: Event, listener: (...args: AccountEvents<H>[Event]) => void): this;
    once<Event extends keyof AccountEvents<H>>(event: Event, listener: (...args: AccountEvents<H>[Event]) => void): this;
    off<Event extends keyof AccountEvents<H>>(event: Event, listener: (...args: AccountEvents<H>[Event]) => void): this;
    emit<Event extends keyof AccountEvents<H>>(event: Event, ...args: AccountEvents<H>[Event]): boolean;
}
