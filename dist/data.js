import Big from 'big.js';
export const BID = 1;
export const ASK = -1;
export const OPEN = 1;
export const CLOSE = -1;
export const LONG = 1;
export const SHORT = -1;
// export interface LimitOrder {
//     price: Big;
//     quantity: Big;
//     side: Side;
//     length: Length;
//     operation: Operation;
// }
export class LimitOrder {
    constructor(config) {
        ({
            side: this.side,
            operation: this.operation,
            price: this.price,
            quantity: this.quantity,
        } = config);
    }
    get length() {
        return this.side * this.operation;
    }
    toJSON() {
        return {
            side: this.side,
            operation: this.operation,
            length: this.length,
            price: this.price,
            quantity: this.quantity,
        };
    }
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
export class Assets {
    constructor(config) {
        ({
            position: this.position,
            balance: this.balance,
            cost: this.cost,
            frozenMargin: this.frozenMargin,
            frozenPosition: this.frozenPosition,
            leverage: this.leverage,
            CURRENCY_DP: this.CURRENCY_DP,
        } = config);
    }
    get margin() {
        return new Big(0)
            .plus(this.cost[LONG])
            .plus(this.cost[SHORT])
            .div(this.leverage)
            .round(this.CURRENCY_DP, 3 /* RoundUp */);
    }
    get reserve() {
        return this.balance
            .minus(this.margin)
            .minus(this.frozenMargin);
    }
    get closable() {
        return {
            [LONG]: this.position[LONG]
                .minus(this.frozenPosition[LONG]),
            [SHORT]: this.position[SHORT]
                .minus(this.frozenPosition[SHORT]),
        };
    }
    toJSON() {
        return {
            balance: this.balance,
            cost: this.cost,
            margin: this.margin,
            position: this.position,
            frozenMargin: this.frozenMargin,
            frozenPosition: this.frozenPosition,
            reserve: this.reserve,
            closable: this.closable,
        };
    }
}
//# sourceMappingURL=data.js.map