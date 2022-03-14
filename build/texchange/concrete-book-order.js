"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConcreteBookOrderStatic = void 0;
class ConcreteBookOrderStatic {
    constructor(ConcreteH) {
        this.ConcreteH = ConcreteH;
    }
    capture(order) {
        return {
            price: this.ConcreteH.capture(order.price),
            quantity: this.ConcreteH.capture(order.quantity),
            side: order.side,
        };
    }
    restore(snapshot) {
        return {
            price: this.ConcreteH.restore(snapshot.price),
            quantity: this.ConcreteH.restore(snapshot.quantity),
            side: snapshot.side,
        };
    }
}
exports.ConcreteBookOrderStatic = ConcreteBookOrderStatic;
//# sourceMappingURL=concrete-book-order.js.map