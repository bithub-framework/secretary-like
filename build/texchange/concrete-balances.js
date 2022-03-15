"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConcreteBalancesStatic = void 0;
class ConcreteBalancesStatic {
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
exports.ConcreteBalancesStatic = ConcreteBalancesStatic;
//# sourceMappingURL=concrete-balances.js.map