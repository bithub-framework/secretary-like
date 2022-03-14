"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConcreteLimitOrderStatic = void 0;
class ConcreteLimitOrderStatic {
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
}
exports.ConcreteLimitOrderStatic = ConcreteLimitOrderStatic;
//# sourceMappingURL=concrete-limit-order.js.map