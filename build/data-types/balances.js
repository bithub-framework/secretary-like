"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BalancesStatic = exports.BalancesLike = void 0;
class BalancesLike {
    constructor(source, H) {
        this.balance = H.create(source.balance);
        this.available = H.create(source.available);
        this.time = source.time;
    }
}
exports.BalancesLike = BalancesLike;
class Balances extends BalancesLike {
    constructor(source, Balances, H) {
        super(source, H);
        this.Balances = Balances;
    }
    toJSON() {
        return this.Balances.capture(this);
    }
    toString() {
        return JSON.stringify(this.toJSON());
    }
}
class BalancesStatic {
    constructor(H) {
        this.H = H;
    }
    create(source) {
        return new Balances(source, this, this.H);
    }
    capture(balances) {
        return {
            balance: this.H.capture(balances.balance),
            available: this.H.capture(balances.available),
            time: balances.time,
        };
    }
    restore(snapshot) {
        return this.create({
            balance: this.H.restore(snapshot.balance),
            available: this.H.restore(snapshot.available),
            time: snapshot.time,
        });
    }
}
exports.BalancesStatic = BalancesStatic;
//# sourceMappingURL=balances.js.map