"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConcreteAmendmentStatic = void 0;
const concrete_open_order_1 = require("./concrete-open-order");
class ConcreteAmendmentStatic {
    constructor(ConcreteH, ConcreteOrderId) {
        this.ConcreteH = ConcreteH;
        this.ConcreteOrderId = ConcreteOrderId;
        this.ConcreteOpenOrder = new concrete_open_order_1.ConcreteOpenOrderStatic(this.ConcreteH, this.ConcreteOrderId);
    }
    capture(amendment) {
        return {
            ...this.ConcreteOpenOrder.capture(amendment),
            newUnfilled: this.ConcreteH.capture(amendment.newUnfilled),
            newPrice: this.ConcreteH.capture(amendment.newPrice),
        };
    }
    restore(snapshot) {
        return {
            ...this.ConcreteOpenOrder.restore(snapshot),
            newUnfilled: this.ConcreteH.restore(snapshot.newUnfilled),
            newPrice: this.ConcreteH.restore(snapshot.newPrice),
        };
    }
}
exports.ConcreteAmendmentStatic = ConcreteAmendmentStatic;
//# sourceMappingURL=concrete-amendment.js.map