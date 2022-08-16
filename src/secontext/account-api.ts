import {
	LimitOrder,
	OpenOrder,
	Amendment,
	Positions,
	Balances,
	HLike,
} from '../imported-data-types';
import { EventEmitter } from 'events';
import { AccountSpec } from '../specification';
import { StateError } from 'startable';



export interface AccountApiLike<H extends HLike<H>> extends
	AccountMethods<H>,
	AccountSpec,
	AccountEventEmitterLike<H> { }

export interface AccountMethods<H extends HLike<H>> {
	makeOrders(orders: LimitOrder.Source<H>[]): Promise<(OpenOrder<H> | Error)[]>;
	amendOrders(amendments: Amendment.Source<H>[]): Promise<(OpenOrder<H> | Error)[]>;
	cancelOrders(orders: OpenOrder.Source<H>[]): Promise<OpenOrder<H>[]>;
	getOpenOrders(): Promise<OpenOrder<H>[]>;
	getPositions(): Promise<Positions<H>>;
	getBalances(): Promise<Balances<H>>;
}

export interface AccountEventEmitterLike<H extends HLike<H>> extends EventEmitter {
	on<Event extends keyof AccountEvents<H>>(event: Event, listener: (...args: AccountEvents<H>[Event]) => void): this;
	once<Event extends keyof AccountEvents<H>>(event: Event, listener: (...args: AccountEvents<H>[Event]) => void): this;
	off<Event extends keyof AccountEvents<H>>(event: Event, listener: (...args: AccountEvents<H>[Event]) => void): this;
	emit<Event extends keyof AccountEvents<H>>(event: Event, ...args: AccountEvents<H>[Event]): boolean;
}

export interface AccountEvents<H extends HLike<H>> {
	positions: [Positions<H>];
	balances: [Balances<H>];
	error: [StateError];
}
