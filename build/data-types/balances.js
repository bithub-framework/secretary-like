"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BalancesFactory = void 0;
class ConcreteBalances {
    constructor(source, factory) {
        this.factory = factory;
        ({
            balance: this.balance,
            available: this.available,
            time: this.time,
        } = source);
    }
    toJSON() {
        return this.factory.capture(this);
    }
    toString() {
        return JSON.stringify(this.toJSON());
    }
}
class BalancesFactory {
    constructor(hFactory) {
        this.hFactory = hFactory;
    }
    new(source) {
        return new ConcreteBalances(source, this);
    }
    capture(balances) {
        return {
            balance: this.hFactory.capture(balances.balance),
            available: this.hFactory.capture(balances.available),
            time: balances.time,
        };
    }
    restore(snapshot) {
        return this.new({
            balance: this.hFactory.restore(snapshot.balance),
            available: this.hFactory.restore(snapshot.available),
            time: snapshot.time,
        });
    }
}
exports.BalancesFactory = BalancesFactory;
//# sourceMappingURL=balances.js.map