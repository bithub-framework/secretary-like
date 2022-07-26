"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AmendmentStatic = void 0;
const open_order_1 = require("./open-order");
class AmendmentStatic extends open_order_1.OpenOrderStatic {
    captureAmendment(amendment) {
        return {
            ...this.captureOpenOrder(amendment),
            newUnfilled: this.H.capture(amendment.newUnfilled),
            newPrice: this.H.capture(amendment.newPrice),
        };
    }
    restoreAmendment(snapshot) {
        return {
            ...this.restoreOpenOrder(snapshot),
            newUnfilled: this.H.restore(snapshot.newUnfilled),
            newPrice: this.H.restore(snapshot.newPrice),
        };
    }
    copyAmendment(amendment) {
        return {
            ...this.copyOpenOrder(amendment),
            newUnfilled: amendment.newUnfilled,
            newPrice: amendment.newPrice,
        };
    }
}
exports.AmendmentStatic = AmendmentStatic;
//# sourceMappingURL=amendment.js.map