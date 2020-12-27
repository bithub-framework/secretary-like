import Big from 'big.js';
export const BID = 1;
export const ASK = -1;
export const OPEN = 1;
export const CLOSE = -1;
export const LONG = 1;
export const SHORT = -1;
export var LimitOrder;
(function (LimitOrder) {
    function from(statics) {
        return {
            side: statics.length * statics.operation,
            operation: statics.operation,
            length: statics.length,
            price: statics.price,
            quantity: statics.quantity,
        };
    }
    LimitOrder.from = from;
})(LimitOrder || (LimitOrder = {}));
export var Assets;
(function (Assets) {
    class AutoAssets {
        constructor(initialBalance, leverage, CURRENCY_DP, initialTime) {
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
                time: this.time,
            };
        }
    }
    Assets.AutoAssets = AutoAssets;
})(Assets || (Assets = {}));
//# sourceMappingURL=data.js.map