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
//# sourceMappingURL=data.js.map