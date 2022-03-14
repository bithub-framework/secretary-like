"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConcreteOpenOrderStatic = void 0;
class ConcreteOpenOrderStatic {
    constructor(ConcreteH, ConcreteLimitOrder, ConcreteOrderId) {
        this.ConcreteH = ConcreteH;
        this.ConcreteLimitOrder = ConcreteLimitOrder;
        this.ConcreteOrderId = ConcreteOrderId;
    }
    capture(order) {
        return {
            ...this.ConcreteLimitOrder.capture(order),
            filled: this.ConcreteH.capture(order.filled),
            unfilled: this.ConcreteH.capture(order.unfilled),
            id: this.ConcreteOrderId.capture(order.id),
        };
    }
    restore(snapshot) {
        return {
            ...this.ConcreteLimitOrder.restore(snapshot),
            filled: this.ConcreteH.restore(snapshot.filled),
            unfilled: this.ConcreteH.restore(snapshot.unfilled),
            id: snapshot.id,
        };
    }
}
exports.ConcreteOpenOrderStatic = ConcreteOpenOrderStatic;
//# sourceMappingURL=concrete-open-order.js.map