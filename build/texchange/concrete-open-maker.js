"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConcreteOpenMakerStatic = void 0;
const concrete_open_order_1 = require("./concrete-open-order");
class ConcreteOpenMakerStatic {
    constructor(H, OrderId) {
        this.H = H;
        this.OrderId = OrderId;
        this.OpenOrder = new concrete_open_order_1.ConcreteOpenOrderStatic(this.H, this.OrderId);
    }
    capture(order) {
        return {
            ...this.OpenOrder.capture(order),
            behind: this.H.capture(order.behind),
        };
    }
    restore(snapshot) {
        return {
            ...this.OpenOrder.restore(snapshot),
            behind: this.H.restore(snapshot.behind),
        };
    }
}
exports.ConcreteOpenMakerStatic = ConcreteOpenMakerStatic;
//# sourceMappingURL=concrete-open-maker.js.map