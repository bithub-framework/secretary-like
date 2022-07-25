"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpenOrder = void 0;
const limit_order_1 = require("./limit-order");
var OpenOrder;
(function (OpenOrder) {
    class Static {
        constructor(H) {
            this.H = H;
            this.LimitOrder = new limit_order_1.LimitOrder.Static(this.H);
        }
        capture(order) {
            return {
                ...this.LimitOrder.capture(order),
                filled: this.H.capture(order.filled),
                unfilled: this.H.capture(order.unfilled),
                id: order.id,
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
        copy(order) {
            return {
                ...this.LimitOrder.copy(order),
                filled: order.filled,
                unfilled: order.unfilled,
                id: order.id,
            };
        }
    }
    OpenOrder.Static = Static;
})(OpenOrder = exports.OpenOrder || (exports.OpenOrder = {}));
//# sourceMappingURL=open-order.js.map