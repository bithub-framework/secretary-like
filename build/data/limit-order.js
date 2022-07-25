"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LimitOrder = void 0;
var LimitOrder;
(function (LimitOrder) {
    class Static {
        constructor(H) {
            this.H = H;
        }
        capture(order) {
            return {
                price: this.H.capture(order.price),
                quantity: this.H.capture(order.quantity),
                side: order.side,
                length: order.length,
                operation: order.operation,
            };
        }
        restore(snapshot) {
            return {
                price: this.H.restore(snapshot.price),
                quantity: this.H.restore(snapshot.quantity),
                side: snapshot.side,
                length: snapshot.length,
                operation: snapshot.operation,
            };
        }
        copy(order) {
            return {
                price: order.price,
                quantity: order.quantity,
                side: order.side,
                length: order.length,
                operation: order.operation,
            };
        }
    }
    LimitOrder.Static = Static;
})(LimitOrder = exports.LimitOrder || (exports.LimitOrder = {}));
//# sourceMappingURL=limit-order.js.map