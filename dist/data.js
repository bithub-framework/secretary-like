import Big from 'big.js';
export const BID = 1;
export const ASK = -1;
export const OPEN = 1;
export const CLOSE = -1;
export const LONG = 1;
export const SHORT = -1;
export class LimitOrder {
    constructor(config) {
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
            };
        };
    }
    get length() {
        return this.side * this.operation;
    }
}
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
            };
        };
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
}
//# sourceMappingURL=data.js.map