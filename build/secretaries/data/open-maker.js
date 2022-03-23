"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpenMakerStatic = void 0;
const open_order_1 = require("./open-order");
class OpenMakerStatic {
    constructor(H, OrderId) {
        this.H = H;
        this.OrderId = OrderId;
        this.OpenOrder = new open_order_1.OpenOrderStatic(this.H, this.OrderId);
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
    copy(order) {
        return {
            ...this.OpenOrder.copy(order),
            behind: order.behind,
        };
    }
}
exports.OpenMakerStatic = OpenMakerStatic;
//# sourceMappingURL=open-maker.js.map