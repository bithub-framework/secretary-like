/// <reference types="node" />
import { LimitOrder } from './context/limit-order';
import { OpenOrder } from './context/open-order';
import { Amendment } from './context/amendment';
import { Positions } from './context/positions';
import { Balances } from './context/balances';
import { Orderbook } from './context/orderbook';
import { Trade } from './context/trade';
import { HLike } from './context/h';
import { MarketSpec, AccountSpec, MarketCalc } from './specification';
import { Timeline } from './timeline';
import { EventEmitter } from 'events';
export interface ContextLike<ConcreteH extends HLike<ConcreteH>, ConcreteOrderId, ConcreteTradeId> {
    readonly [marketIndex: number]: ContextMarketLike<ConcreteH, ConcreteOrderId, ConcreteTradeId>;
    readonly timeline: Timeline;
    /** @param value Serializable into JSON */
    submit(key: string, value: any): Promise<void>;
}
export interface ContextMarketLike<ConcreteH extends HLike<ConcreteH>, ConcreteOrderId, ConcreteTradeId> extends ContextMarketApiLike<ConcreteH, ConcreteTradeId> {
    readonly [accountIndex: number]: ContextAccountLike<ConcreteH, ConcreteOrderId>;
    readonly spec: MarketSpec;
    readonly calc: MarketCalc;
}
export interface ContextAccountLike<ConcreteH extends HLike<ConcreteH>, ConcreteOrderId> extends ContextAccountApiLike<ConcreteH, ConcreteOrderId> {
    readonly spec: AccountSpec;
}
export interface MarketEvents<ConcreteH extends HLike<ConcreteH>, ConcreteTradeId> {
    orderbook: [Orderbook.MutablePlain<ConcreteH>];
    trades: [Trade.MutablePlain<ConcreteH, ConcreteTradeId>[]];
    error: [Error];
}
export interface ContextMarketApiLike<ConcreteH extends HLike<ConcreteH>, ConcreteTradeId> extends EventEmitter {
    on<Event extends keyof MarketEvents<ConcreteH, ConcreteTradeId>>(event: Event, listener: (...args: MarketEvents<ConcreteH, ConcreteTradeId>[Event]) => void): this;
    once<Event extends keyof MarketEvents<ConcreteH, ConcreteTradeId>>(event: Event, listener: (...args: MarketEvents<ConcreteH, ConcreteTradeId>[Event]) => void): this;
    off<Event extends keyof MarketEvents<ConcreteH, ConcreteTradeId>>(event: Event, listener: (...args: MarketEvents<ConcreteH, ConcreteTradeId>[Event]) => void): this;
    emit<Event extends keyof MarketEvents<ConcreteH, ConcreteTradeId>>(event: Event, ...args: MarketEvents<ConcreteH, ConcreteTradeId>[Event]): boolean;
}
export interface AccountEvents<ConcreteH extends HLike<ConcreteH>> {
    positions: [Positions.MutablePlain<ConcreteH>];
    balances: [Balances.MutablePlain<ConcreteH>];
    error: [Error];
}
export interface ContextAccountApiLike<ConcreteH extends HLike<ConcreteH>, ConcreteOrderId> extends EventEmitter {
    makeOrders(orders: readonly LimitOrder<ConcreteH>[]): Promise<(OpenOrder.MutablePlain<ConcreteH, ConcreteOrderId> | Error)[]>;
    amendOrders(amendments: readonly Amendment<ConcreteH, ConcreteOrderId>[]): Promise<(OpenOrder.MutablePlain<ConcreteH, ConcreteOrderId> | Error)[]>;
    getOpenOrders(): Promise<OpenOrder.MutablePlain<ConcreteH, ConcreteOrderId>[]>;
    cancelOrders(orders: readonly OpenOrder<ConcreteH, ConcreteOrderId>[]): Promise<OpenOrder.MutablePlain<ConcreteH, ConcreteOrderId>[]>;
    getPositions(): Promise<Positions.MutablePlain<ConcreteH>>;
    getBalances(): Promise<Balances.MutablePlain<ConcreteH>>;
    on<Event extends keyof AccountEvents<ConcreteH>>(event: Event, listener: (...args: AccountEvents<ConcreteH>[Event]) => void): this;
    once<Event extends keyof AccountEvents<ConcreteH>>(event: Event, listener: (...args: AccountEvents<ConcreteH>[Event]) => void): this;
    off<Event extends keyof AccountEvents<ConcreteH>>(event: Event, listener: (...args: AccountEvents<ConcreteH>[Event]) => void): this;
    emit<Event extends keyof AccountEvents<ConcreteH>>(event: Event, ...args: AccountEvents<ConcreteH>[Event]): boolean;
}
