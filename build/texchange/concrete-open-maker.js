"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConcreteOpenMakerStatic = void 0;
const concrete_open_order_1 = require("./concrete-open-order");
class ConcreteOpenMakerStatic {
    constructor(ConcreteH, ConcreteOrderId) {
        this.ConcreteH = ConcreteH;
        this.ConcreteOrderId = ConcreteOrderId;
        this.ConcreteOpenOrder = new concrete_open_order_1.ConcreteOpenOrderStatic(this.ConcreteH, this.ConcreteOrderId);
    }
    capture(order) {
        return {
            ...this.ConcreteOpenOrder.capture(order),
            behind: this.ConcreteH.capture(order.behind),
        };
    }
    restore(snapshot) {
        return {
            ...this.ConcreteOpenOrder.restore(snapshot),
            behind: this.ConcreteH.restore(snapshot.behind),
        };
    }
}
exports.ConcreteOpenMakerStatic = ConcreteOpenMakerStatic;
//# sourceMappingURL=concrete-open-maker.js.map