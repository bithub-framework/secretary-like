"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LimitOrderFactory = void 0;
class LimitOrderFactory {
    constructor(hFactory) {
        this.hFactory = hFactory;
    }
    capture(order) {
        return {
            price: this.hFactory.capture(order.price),
            quantity: this.hFactory.capture(order.quantity),
            side: order.side,
            length: order.length,
            action: order.action,
        };
    }
    restore(snapshot) {
        return {
            price: this.hFactory.restore(snapshot.price),
            quantity: this.hFactory.restore(snapshot.quantity),
            side: snapshot.side,
            length: snapshot.length,
            action: snapshot.action,
        };
    }
    copy(order) {
        return {
            price: order.price,
            quantity: order.quantity,
            side: order.side,
            length: order.length,
            action: order.action,
        };
    }
}
exports.LimitOrderFactory = LimitOrderFactory;
//# sourceMappingURL=limit-order.js.map