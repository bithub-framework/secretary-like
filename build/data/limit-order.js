"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LimitOrderStatic = void 0;
class LimitOrderStatic {
    constructor(H) {
        this.H = H;
    }
    captureLimitOrder(order) {
        return {
            price: this.H.capture(order.price),
            quantity: this.H.capture(order.quantity),
            side: order.side,
            length: order.length,
            operation: order.operation,
        };
    }
    restoreLimitOrder(snapshot) {
        return {
            price: this.H.restore(snapshot.price),
            quantity: this.H.restore(snapshot.quantity),
            side: snapshot.side,
            length: snapshot.length,
            operation: snapshot.operation,
        };
    }
    copyLimitOrder(order) {
        return {
            price: order.price,
            quantity: order.quantity,
            side: order.side,
            length: order.length,
            operation: order.operation,
        };
    }
}
exports.LimitOrderStatic = LimitOrderStatic;
//# sourceMappingURL=limit-order.js.map