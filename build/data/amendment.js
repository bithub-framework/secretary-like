"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Amendment = void 0;
const open_order_1 = require("./open-order");
var Amendment;
(function (Amendment) {
    class Static {
        constructor(H) {
            this.H = H;
            this.OpenOrder = new open_order_1.OpenOrder.Static(this.H);
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
        copy(amendment) {
            return {
                ...this.OpenOrder.copy(amendment),
                newUnfilled: amendment.newUnfilled,
                newPrice: amendment.newPrice,
            };
        }
    }
    Amendment.Static = Static;
})(Amendment = exports.Amendment || (exports.Amendment = {}));
//# sourceMappingURL=amendment.js.map