"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConcreteOpenOrderStatic = void 0;
const concrete_limit_order_1 = require("./concrete-limit-order");
class ConcreteOpenOrderStatic {
    constructor(H, OrderId) {
        this.H = H;
        this.OrderId = OrderId;
        this.LimitOrder = new concrete_limit_order_1.ConcreteLimitOrderStatic(this.H);
    }
    capture(order) {
        return {
            ...this.LimitOrder.capture(order),
            filled: this.H.capture(order.filled),
            unfilled: this.H.capture(order.unfilled),
            id: this.OrderId.capture(order.id),
        };
    }
    restore(snapshot) {
        return {
            ...this.LimitOrder.restore(snapshot),
            filled: this.H.restore(snapshot.filled),
            unfilled: this.H.restore(snapshot.unfilled),
            id: snapshot.id,
        };
    }
}
exports.ConcreteOpenOrderStatic = ConcreteOpenOrderStatic;
//# sourceMappingURL=concrete-open-order.js.map