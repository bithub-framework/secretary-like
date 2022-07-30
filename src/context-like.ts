import { LimitOrderLike } from './data-types/limit-order';
import { OpenOrderLike } from './data-types/open-order';
import { AmendmentLike } from './data-types/amendment';
import { PositionsLike } from './data-types/positions';
import { BalancesLike } from './data-types/balances';
import { OrderbookLike } from './data-types/orderbook';
import { TradeLike } from './data-types/trade';
import { HLike } from './data-types/h';
import { DataTypesNamespace } from './data-types/data-types-namespace';
import { TimelineLike } from './timeline-like';
import { EventEmitter } from 'events';
import {
    MarketSpecLike,
    AccountSpecLike,
} from './specification';



export interface ContextLike<H extends HLike<H>> {
    readonly [marketIndex: number]: MarketLike<H>;
    readonly timeline: TimelineLike;
    submit(content: string): void;
    DataTypes: DataTypesNamespace<H>;
}

export interface MarketLike<H extends HLike<H>> extends MarketApiLike<H> {
    readonly [accountIndex: number]: AccountLike<H>;
}

export interface MarketApiLike<H extends HLike<H>> extends
    MarketMethods<H>,
    MarketEventEmitterLike<H>,
    MarketSpecLike<H> { }

export interface MarketMethods<H extends HLike<H>> { }

export interface MarketEvents<H extends HLike<H>> {
    orderbook: [OrderbookLike<H>];
    trades: [TradeLike<H>[]];
    error: [Error];
}

export class ConnectionClosed extends Error { }

export interface MarketEventEmitterLike<H extends HLike<H>> extends EventEmitter {
    on<Event extends keyof MarketEvents<H>>(event: Event, listener: (...args: MarketEvents<H>[Event]) => void): this;
    once<Event extends keyof MarketEvents<H>>(event: Event, listener: (...args: MarketEvents<H>[Event]) => void): this;
    off<Event extends keyof MarketEvents<H>>(event: Event, listener: (...args: MarketEvents<H>[Event]) => void): this;
    emit<Event extends keyof MarketEvents<H>>(event: Event, ...args: MarketEvents<H>[Event]): boolean;
}

export interface AccountLike<H extends HLike<H>>
    extends AccountApiLike<H> {
}

export interface AccountApiLike<H extends HLike<H>> extends
    AccountMethods<H>,
    AccountSpecLike,
    AccountEventEmitterLike<H> { }

export interface AccountMethods<H extends HLike<H>> {
    makeOrders(orders: LimitOrderLike<H>[]): Promise<(OpenOrderLike<H> | Error)[]>;
    amendOrders(amendments: AmendmentLike<H>[]): Promise<(OpenOrderLike<H> | Error)[]>;
    getOpenOrders(): Promise<OpenOrderLike<H>[]>;
    cancelOrders(orders: OpenOrderLike<H>[]): Promise<OpenOrderLike<H>[]>;
    getPositions(): Promise<PositionsLike<H>>;
    getBalances(): Promise<BalancesLike<H>>;
}

export interface AccountEvents<H extends HLike<H>> {
    positions: [PositionsLike<H>];
    balances: [BalancesLike<H>];
    error: [Error];
}

export interface AccountEventEmitterLike<H extends HLike<H>> extends EventEmitter {
    on<Event extends keyof AccountEvents<H>>(event: Event, listener: (...args: AccountEvents<H>[Event]) => void): this;
    once<Event extends keyof AccountEvents<H>>(event: Event, listener: (...args: AccountEvents<H>[Event]) => void): this;
    off<Event extends keyof AccountEvents<H>>(event: Event, listener: (...args: AccountEvents<H>[Event]) => void): this;
    emit<Event extends keyof AccountEvents<H>>(event: Event, ...args: AccountEvents<H>[Event]): boolean;
}
