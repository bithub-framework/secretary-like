/// <reference types="node" />
import { LimitOrder } from './data/limit-order';
import { OpenOrder } from './data/open-order';
import { Amendment } from './data/amendment';
import { Positions } from './data/positions';
import { Balances } from './data/balances';
import { Orderbook } from './data/orderbook';
import { Trade } from './data/trade';
import { HLike } from './data/h';
import { TimelineLike } from './timeline-like';
import { MarketSpec, AccountSpec, MarketCalc } from './specification';
export interface ContextLike<H extends HLike<H>> {
    readonly [marketIndex: number]: MarketLike<H>;
    readonly timeline: TimelineLike;
    submit(content: string): void;
}
export interface MarketLike<H extends HLike<H>> extends MarketApiLike<H> {
    readonly [accountIndex: number]: AccountLike<H>;
}
export interface MarketApiLike<H extends HLike<H>> extends MarketMethods<H> {
    readonly spec: MarketSpec<H>;
    readonly events: MarketEventEmitterLike<H>;
}
export interface MarketMethods<H extends HLike<H>> extends MarketCalc<H> {
}
export interface MarketEvents<H extends HLike<H>> {
    orderbook: [Orderbook<H>];
    trades: [Trade<H>[]];
    error: [Error];
}
export interface MarketEventEmitterLike<H extends HLike<H>> extends NodeJS.EventEmitter {
    on<Event extends keyof MarketEvents<H>>(event: Event, listener: (...args: MarketEvents<H>[Event]) => void): this;
    once<Event extends keyof MarketEvents<H>>(event: Event, listener: (...args: MarketEvents<H>[Event]) => void): this;
    off<Event extends keyof MarketEvents<H>>(event: Event, listener: (...args: MarketEvents<H>[Event]) => void): this;
    emit<Event extends keyof MarketEvents<H>>(event: Event, ...args: MarketEvents<H>[Event]): boolean;
}
export interface AccountLike<H extends HLike<H>> extends AccountApiLike<H> {
}
export interface AccountApiLike<H extends HLike<H>> extends AccountMethods<H> {
    readonly spec: AccountSpec;
    readonly events: AccountEventEmitterLike<H>;
}
export interface AccountMethods<H extends HLike<H>> {
    makeOrders(orders: LimitOrder<H>[]): Promise<(OpenOrder<H> | Error)[]>;
    amendOrders(amendments: Amendment<H>[]): Promise<(OpenOrder<H> | Error)[]>;
    getOpenOrders(): Promise<OpenOrder<H>[]>;
    cancelOrders(orders: OpenOrder<H>[]): Promise<OpenOrder<H>[]>;
    getPositions(): Promise<Positions<H>>;
    getBalances(): Promise<Balances<H>>;
}
export interface AccountEvents<H extends HLike<H>> {
    positions: [Positions<H>];
    balances: [Balances<H>];
    error: [Error];
}
export interface AccountEventEmitterLike<H extends HLike<H>> extends NodeJS.EventEmitter {
    on<Event extends keyof AccountEvents<H>>(event: Event, listener: (...args: AccountEvents<H>[Event]) => void): this;
    once<Event extends keyof AccountEvents<H>>(event: Event, listener: (...args: AccountEvents<H>[Event]) => void): this;
    off<Event extends keyof AccountEvents<H>>(event: Event, listener: (...args: AccountEvents<H>[Event]) => void): this;
    emit<Event extends keyof AccountEvents<H>>(event: Event, ...args: AccountEvents<H>[Event]): boolean;
}
