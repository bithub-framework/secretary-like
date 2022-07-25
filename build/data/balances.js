"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Balances = void 0;
var Balances;
(function (Balances) {
    class Static {
        constructor(H) {
            this.H = H;
        }
        capture(balances) {
            return {
                balance: this.H.capture(balances.balance),
                available: this.H.capture(balances.available),
                time: balances.time,
            };
        }
        restore(snapshot) {
            return {
                balance: this.H.restore(snapshot.balance),
                available: this.H.restore(snapshot.available),
                time: snapshot.time,
            };
        }
        copy(balances) {
            return {
                balance: balances.balance,
                available: balances.available,
                time: balances.time,
            };
        }
    }
    Balances.Static = Static;
})(Balances = exports.Balances || (exports.Balances = {}));
//# sourceMappingURL=balances.js.map