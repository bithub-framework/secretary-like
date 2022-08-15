import { MarketSpec } from '../specification';
import { HLike, Trade, Orderbook } from '../data-types';
import { EventEmitter } from 'events';
import { StateError } from 'startable';
export interface MarketApiLike<H extends HLike<H>> extends MarketMethods<H>, MarketEventEmitterLike<H>, MarketSpec<H> {
}
export interface MarketMethods<H extends HLike<H>> {
}
export interface MarketEventEmitterLike<H extends HLike<H>> extends EventEmitter {
    on<Event extends keyof MarketEvents<H>>(event: Event, listener: (...args: MarketEvents<H>[Event]) => void): this;
    once<Event extends keyof MarketEvents<H>>(event: Event, listener: (...args: MarketEvents<H>[Event]) => void): this;
    off<Event extends keyof MarketEvents<H>>(event: Event, listener: (...args: MarketEvents<H>[Event]) => void): this;
    emit<Event extends keyof MarketEvents<H>>(event: Event, ...args: MarketEvents<H>[Event]): boolean;
}
export interface MarketEvents<H extends HLike<H>> {
    orderbook: [Orderbook<H>];
    trades: [Trade<H>[]];
    error: [StateError];
}
