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
    type Computed = 'length';
    type Statics = Omit<LimitOrder, Computed>;
    export function from(statics: Statics): LimitOrder {
        return {
            side: statics.side,
            operation: statics.operation,
            length: statics.side * statics.operation,
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

    // computed
    margin: Big;
    reserve: Big;
    closable: {
        [length: number]: Big;
    };
}

export namespace Assets {
    // type Computed = 'margin' | 'reserve' | 'closable';
    // type Privates = {
    //     leverage: number;
    //     CURRENCY_DP: number;
    // };
    // type Statics = Omit<Assets, Computed> & Privates;

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
        private leverage: number;
        private CURRENCY_DP: number;

        // constructor(config: Statics) {
        //     ({
        //         position: this.position,
        //         balance: this.balance,
        //         cost: this.cost,
        //         frozenMargin: this.frozenMargin,
        //         frozenPosition: this.frozenPosition,
        //         leverage: this.leverage,
        //         CURRENCY_DP: this.CURRENCY_DP,
        //     } = config);
        // }

        constructor(
            initialBalance: Big,
            leverage: number,
            CURRENCY_DP: number,
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
            }
        }
    }
}

