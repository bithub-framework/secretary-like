"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpenOrderStatic = void 0;
const limit_order_1 = require("./limit-order");
class OpenOrderStatic extends limit_order_1.LimitOrderStatic {
    captureOpenOrder(order) {
        return {
            ...this.captureLimitOrder(order),
            filled: this.H.capture(order.filled),
            unfilled: this.H.capture(order.unfilled),
            id: order.id,
        };
    }
    restoreOpenOrder(snapshot) {
        return {
            ...this.restoreLimitOrder(snapshot),
            filled: this.H.restore(snapshot.filled),
            unfilled: this.H.restore(snapshot.unfilled),
            id: snapshot.id,
        };
    }
    copyOpenOrder(order) {
        return {
            ...this.copyLimitOrder(order),
            filled: order.filled,
            unfilled: order.unfilled,
            id: order.id,
        };
    }
}
exports.OpenOrderStatic = OpenOrderStatic;
//# sourceMappingURL=open-order.js.map