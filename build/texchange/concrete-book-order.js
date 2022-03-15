"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConcreteBookOrderStatic = void 0;
class ConcreteBookOrderStatic {
    constructor(H) {
        this.H = H;
    }
    capture(order) {
        return {
            price: this.H.capture(order.price),
            quantity: this.H.capture(order.quantity),
            side: order.side,
        };
    }
    restore(snapshot) {
        return {
            price: this.H.restore(snapshot.price),
            quantity: this.H.restore(snapshot.quantity),
            side: snapshot.side,
        };
    }
}
exports.ConcreteBookOrderStatic = ConcreteBookOrderStatic;
//# sourceMappingURL=concrete-book-order.js.map