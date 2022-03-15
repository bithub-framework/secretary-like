"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpenOrderStatic = void 0;
const limit_order_1 = require("./limit-order");
class OpenOrderStatic {
    constructor(H, OrderId) {
        this.H = H;
        this.OrderId = OrderId;
        this.LimitOrder = new limit_order_1.LimitOrderStatic(this.H);
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
            id: this.OrderId.restore(snapshot.id),
        };
    }
}
exports.OpenOrderStatic = OpenOrderStatic;
//# sourceMappingURL=open-order.js.map