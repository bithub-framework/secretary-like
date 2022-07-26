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
            operation: order.action,
        };
    }
    restoreLimitOrder(snapshot) {
        return {
            price: this.H.restore(snapshot.price),
            quantity: this.H.restore(snapshot.quantity),
            side: snapshot.side,
            length: snapshot.length,
            action: snapshot.operation,
        };
    }
    copyLimitOrder(order) {
        return {
            price: order.price,
            quantity: order.quantity,
            side: order.side,
            length: order.length,
            action: order.action,
        };
    }
}
exports.LimitOrderStatic = LimitOrderStatic;
//# sourceMappingURL=limit-order.js.map