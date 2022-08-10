import { LimitOrder } from './data-types/limit-order';
import { OpenOrder } from './data-types/open-order';
import { Amendment } from './data-types/amendment';
import { Positions } from './data-types/positions';
import { Balances } from './data-types/balances';
import { Orderbook } from './data-types/orderbook';
import { Trade } from './data-types/trade';
import { HLike } from './data-types/h';
import { DataTypesNamespace } from './data-types/data-types-namespace';
import { TimelineLike } from './timeline-like';
import { EventEmitter } from 'events';
import { MarketSpec, AccountSpec } from './specification';
import { Startable } from 'startable';
export interface ContextLike<H extends HLike<H>> {
    readonly [marketIndex: number]: MarketLike<H>;
    readonly timeline: TimelineLike;
    submit(content: string): void;
    DataTypes: DataTypesNamespace<H>;
}
export interface MarketLike<H extends HLike<H>> extends MarketApiLike<H> {
    readonly [accountIndex: number]: AccountLike<H>;
}
export interface MarketApiLike<H extends HLike<H>> extends MarketMethods<H>, MarketEventEmitterLike<H>, MarketSpec<H> {
    $s: Startable;
}
export interface MarketMethods<H extends HLike<H>> {
}
export interface MarketEvents<H extends HLike<H>> {
    orderbook: [Orderbook<H>];
    trades: [Trade<H>[]];
    error: [Error];
}
export declare class ExchangeUnavailable extends Error {
}
export interface MarketEventEmitterLike<H extends HLike<H>> extends EventEmitter {
    on<Event extends keyof MarketEvents<H>>(event: Event, listener: (...args: MarketEvents<H>[Event]) => void): this;
    once<Event extends keyof MarketEvents<H>>(event: Event, listener: (...args: MarketEvents<H>[Event]) => void): this;
    off<Event extends keyof MarketEvents<H>>(event: Event, listener: (...args: MarketEvents<H>[Event]) => void): this;
    emit<Event extends keyof MarketEvents<H>>(event: Event, ...args: MarketEvents<H>[Event]): boolean;
}
export interface AccountLike<H extends HLike<H>> extends AccountApiLike<H> {
}
export interface AccountApiLike<H extends HLike<H>> extends AccountMethods<H>, AccountSpec, AccountEventEmitterLike<H> {
    $s: Startable;
}
export interface AccountMethods<H extends HLike<H>> {
    makeOrders(orders: LimitOrder.Source<H>[]): Promise<(OpenOrder<H> | Error)[]>;
    amendOrders(amendments: Amendment.Source<H>[]): Promise<(OpenOrder<H> | Error)[]>;
    cancelOrders(orders: OpenOrder.Source<H>[]): Promise<OpenOrder<H>[]>;
    getOpenOrders(): Promise<OpenOrder<H>[]>;
    getPositions(): Promise<Positions<H>>;
    getBalances(): Promise<Balances<H>>;
}
export interface AccountEvents<H extends HLike<H>> {
    positions: [Positions<H>];
    balances: [Balances<H>];
    error: [Error];
}
export interface AccountEventEmitterLike<H extends HLike<H>> extends EventEmitter {
    on<Event extends keyof AccountEvents<H>>(event: Event, listener: (...args: AccountEvents<H>[Event]) => void): this;
    once<Event extends keyof AccountEvents<H>>(event: Event, listener: (...args: AccountEvents<H>[Event]) => void): this;
    off<Event extends keyof AccountEvents<H>>(event: Event, listener: (...args: AccountEvents<H>[Event]) => void): this;
    emit<Event extends keyof AccountEvents<H>>(event: Event, ...args: AccountEvents<H>[Event]): boolean;
}
