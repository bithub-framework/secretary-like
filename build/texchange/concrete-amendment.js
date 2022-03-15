"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConcreteAmendmentStatic = void 0;
const concrete_open_order_1 = require("./concrete-open-order");
class ConcreteAmendmentStatic {
    constructor(H, OrderId) {
        this.H = H;
        this.OrderId = OrderId;
        this.OpenOrder = new concrete_open_order_1.ConcreteOpenOrderStatic(this.H, this.OrderId);
    }
    capture(amendment) {
        return {
            ...this.OpenOrder.capture(amendment),
            newUnfilled: this.H.capture(amendment.newUnfilled),
            newPrice: this.H.capture(amendment.newPrice),
        };
    }
    restore(snapshot) {
        return {
            ...this.OpenOrder.restore(snapshot),
            newUnfilled: this.H.restore(snapshot.newUnfilled),
            newPrice: this.H.restore(snapshot.newPrice),
        };
    }
}
exports.ConcreteAmendmentStatic = ConcreteAmendmentStatic;
//# sourceMappingURL=concrete-amendment.js.map