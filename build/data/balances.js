"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BalancesFactory = void 0;
class BalancesFactory {
    constructor(hFactory) {
        this.hFactory = hFactory;
    }
    capture(balances) {
        return {
            balance: this.hFactory.capture(balances.balance),
            available: this.hFactory.capture(balances.available),
            time: balances.time,
        };
    }
    restore(snapshot) {
        return {
            balance: this.hFactory.restore(snapshot.balance),
            available: this.hFactory.restore(snapshot.available),
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
exports.BalancesFactory = BalancesFactory;
//# sourceMappingURL=balances.js.map