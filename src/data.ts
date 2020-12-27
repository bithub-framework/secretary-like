import Big from 'big.js';
import { RoundingMode } from 'big.js';

export type Mutable<T> = {
    -readonly [P in keyof T]: T[P];
};

export type Side = number;
export const BID: Side = 1;
export const ASK: Side = -1;

export type Operation = number;
export const OPEN: Operation = 1;
export const CLOSE: Operation = -1;

export type Length = number;
export const LONG: Length = 1;
export const SHORT: Length = -1;

export type OrderId = number | string;
export type TradeId = number | string;

export interface LimitOrder {
    price: Big;
    quantity: Big;
    side: Side;
    length: Length;
    operation: Operation;
}

export namespace LimitOrder {
    type Computed = 'side';
    type Statics = Omit<LimitOrder, Computed>;
    export function from(statics: Statics): LimitOrder {
        return {
            side: statics.length * statics.operation,
            operation: statics.operation,
            length: statics.length,
            price: statics.price,
            quantity: statics.quantity,
        }
    }
}

export interface OpenOrder extends LimitOrder {
    id: OrderId;
}

export interface Trade {
    side: Side;
    price: Big;
    quantity: Big;
    time: number;
    id: TradeId;
}

export interface MakerOrder {
    price: Big;
    quantity: Big;
    side: Side,
}

export interface Orderbook {
    [side: number]: MakerOrder[],
    time: number;
}

export interface Assets {
    position: {
        [length: number]: Big;
    };
    balance: Big;
    cost: {
        [length: number]: Big;
    };
    frozenMargin: Big;
    frozenPosition: {
        [length: number]: Big;
    };
    time: number;

    // computed
    margin: Big;
    reserve: Big;
    closable: {
        [length: number]: Big;
    };
}

export namespace Assets {
    export class AutoAssets implements Assets {
        public position: {
            [length: number]: Big;
        };
        public balance: Big;
        public cost: {
            [length: number]: Big;
        };
        public frozenMargin: Big;
        public frozenPosition: {
            [length: number]: Big;
        };
        public time: number;
        private leverage: number;
        private CURRENCY_DP: number;

        constructor(
            initialBalance: Big,
            leverage: number,
            CURRENCY_DP: number,
            initialTime: number,
        ) {
            this.balance = initialBalance,
                this.position = {
                    [LONG]: new Big(0),
                    [SHORT]: new Big(0),
                };
            this.cost = {
                [LONG]: new Big(0),
                [SHORT]: new Big(0),
            };
            this.frozenMargin = new Big(0),
                this.frozenPosition = {
                    [LONG]: new Big(0),
                    [SHORT]: new Big(0),
                };
            this.leverage = leverage;
            this.CURRENCY_DP = CURRENCY_DP;
            this.time = initialTime;
        }

        public get margin(): Big {
            return new Big(0)
                .plus(this.cost[LONG])
                .plus(this.cost[SHORT])
                .div(this.leverage)
                .round(this.CURRENCY_DP, RoundingMode.RoundUp);
        }

        public get reserve(): Big {
            return this.balance
                .minus(this.margin)
                .minus(this.frozenMargin);
        }

        public get closable() {
            return {
                [LONG]: this.position[LONG]
                    .minus(this.frozenPosition[LONG]),
                [SHORT]: this.position[SHORT]
                    .minus(this.frozenPosition[SHORT]),
            };
        }

        public toJSON(): Assets {
            return {
                balance: this.balance,
                cost: this.cost,
                margin: this.margin,
                position: this.position,
                frozenMargin: this.frozenMargin,
                frozenPosition: this.frozenPosition,
                reserve: this.reserve,
                closable: this.closable,
                time: this.time,
            }
        }
    }
}

