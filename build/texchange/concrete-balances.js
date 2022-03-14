"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConcreteBalancesStatic = void 0;
class ConcreteBalancesStatic {
    constructor(ConcreteH) {
        this.ConcreteH = ConcreteH;
    }
    capture(balances) {
        return {
            balance: this.ConcreteH.capture(balances.balance),
            available: this.ConcreteH.capture(balances.available),
            time: balances.time,
        };
    }
    restore(snapshot) {
        return {
            balance: this.ConcreteH.restore(snapshot.balance),
            available: this.ConcreteH.restore(snapshot.available),
            time: snapshot.time,
        };
    }
}
exports.ConcreteBalancesStatic = ConcreteBalancesStatic;
//# sourceMappingURL=concrete-balances.js.map