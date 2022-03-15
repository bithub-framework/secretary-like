"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BalancesStatic = void 0;
class BalancesStatic {
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
}
exports.BalancesStatic = BalancesStatic;
//# sourceMappingURL=balances.js.map