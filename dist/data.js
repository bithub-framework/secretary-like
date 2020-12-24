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
            side: statics.side,
            operation: statics.operation,
            length: statics.side * statics.operation,
            price: statics.price,
            quantity: statics.quantity,
        };
    }
    LimitOrder.from = from;
})(LimitOrder || (LimitOrder = {}));
export var Assets;
(function (Assets) {
    // type Computed = 'margin' | 'reserve' | 'closable';
    // type Privates = {
    //     leverage: number;
    //     CURRENCY_DP: number;
    // };
    // type Statics = Omit<Assets, Computed> & Privates;
    class AutoAssets {
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
        constructor(initialBalance, leverage, CURRENCY_DP) {
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
    Assets.AutoAssets = AutoAssets;
})(Assets || (Assets = {}));
//# sourceMappingURL=data.js.map