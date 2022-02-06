import {
    LimitOrder,
    OpenOrder,
    Orderbook,
    Trade,
    Positions,
    Balances,
    Amendment,
} from './data';
import {
    MarketSpec,
    AccountSpec,
    MarketCalc,
} from './specification';
import { Timeline } from './timeline';
import { GenericEvents, TypedEventEmitter } from 'typed-event-emitter';

export interface ContextLike {
    [marketIndex: number]: ContextMarketLike;
    // timeline: Timeline<any>;
    timeline: Timeline;
    /** @param value Serializable into JSON */
    submit(key: string, value: any): Promise<void>;
}

export interface ContextMarketLike extends ContextMarketApiLike {
    [accountIndex: number]: ContextAccountLike;
    spec: MarketSpec;
    calc: MarketCalc;
}

export interface ContextAccountLike extends ContextAccountApiLike {
    spec: AccountSpec;
}

export interface MarketEvents extends GenericEvents {
    orderbook: [Orderbook];
    trades: [Trade[]];
    error: [Error];
}

export type ContextMarketApiLike = TypedEventEmitter<MarketEvents>;
// export interface ContextMarketApiLike extends EventEmitter {
//     on<Event extends keyof MarketEvents>(event: Event, listener: (...args: MarketEvents[Event]) => void): this;
//     once<Event extends keyof MarketEvents>(event: Event, listener: (...args: MarketEvents[Event]) => void): this;
//     off<Event extends keyof MarketEvents>(event: Event, listener: (...args: MarketEvents[Event]) => void): this;
//     emit<Event extends keyof MarketEvents>(event: Event, ...args: MarketEvents[Event]): boolean;
// }

export interface AccountEvents extends GenericEvents {
    positions: [Positions];
    balances: [Balances];
    error: [Error];
}

export interface ContextAccountApiLike
    extends TypedEventEmitter<AccountEvents> {

    makeOrders(orders: LimitOrder[]): Promise<(OpenOrder | Error)[]>;
    amendOrders(amendments: Amendment[]): Promise<(OpenOrder | Error)[]>;
    getOpenOrders(): Promise<OpenOrder[]>;
    cancelOrders(orders: OpenOrder[]): Promise<OpenOrder[]>;
    getPositions(): Promise<Positions>;
    getBalances(): Promise<Balances>;

    // on<Event extends keyof AccountEvents>(event: Event, listener: (...args: AccountEvents[Event]) => void): this;
    // once<Event extends keyof AccountEvents>(event: Event, listener: (...args: AccountEvents[Event]) => void): this;
    // off<Event extends keyof AccountEvents>(event: Event, listener: (...args: AccountEvents[Event]) => void): this;
    // emit<Event extends keyof AccountEvents>(event: Event, ...args: AccountEvents[Event]): boolean;
}
