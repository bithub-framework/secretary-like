import Big from 'big.js';
import { RoundingMode } from 'big.js';

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

// export interface LimitOrder {
//     price: Big;
//     quantity: Big;
//     side: Side;
//     length: Length;
//     operation: Operation;
// }

export namespace LimitOrder {
    export type Static = Omit<LimitOrder, 'length'>;
}

export class LimitOrder implements LimitOrder.Static {
    public side: Side;
    public operation: Operation;
    public price: Big;
    public quantity: Big;

    constructor(config: LimitOrder.Static) {
        ({
            side: this.side,
            operation: this.operation,
            price: this.price,
            quantity: this.quantity,
        } = config);
        // @ts-ignore
        LimitOrder.prototype.toJSON = function () {
            return {
                side: this.side,
                operation: this.operation,
                length: this.length,
                price: this.price,
                quantity: this.quantity,
            }
        }
    }

    public get length() {
        return this.side * this.operation;
    }
}

// export interface OpenOrder extends LimitOrder {
//     id: OrderId;
// }

export namespace OpenOrder {
    export type Static = LimitOrder.Static & {
        id: OrderId;
    };
}

export class OpenOrder extends LimitOrder implements OpenOrder.Static {
    public id: OrderId;

    constructor(config: OpenOrder.Static) {
        super(config);
        ({
            id: this.id,
        } = config);
    }
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

// export interface Assets {
//     position: {
//         [length: number]: Big;
//     };
//     balance: Big;
//     cost: {
//         [length: number]: Big;
//     };
//     frozenMargin: Big;
//     frozenPosition: {
//         [length: number]: Big;
//     };

//     // computed
//     margin: Big;
//     reserve: Big;
//     closable: {
//         [length: number]: Big;
//     };
// }

export namespace Assets {
    export type Config = Omit<Assets,
        'margin' | 'reserve' | 'closable'
    > & {
        leverage: number;
        CURRENCY_DP: number;
    };
}

export class Assets {
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

    constructor(config: Assets.Config) {
        ({
            position: this.position,
            balance: this.balance,
            cost: this.cost,
            frozenMargin: this.frozenMargin,
            frozenPosition: this.frozenPosition,
            leverage: this.leverage,
            CURRENCY_DP: this.CURRENCY_DP,
        } = config);

        // @ts-ignore
        Assets.prototype.toJSON = function () {
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
}
