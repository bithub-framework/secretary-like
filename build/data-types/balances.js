"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BalancesStatic = exports.BalancesLike = void 0;
const autobind_decorator_1 = require("autobind-decorator");
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
    /**
     * @decorator boundMethod
     */
    create(source) {
        return new Balances(source, this, this.H);
    }
    /**
     * @decorator boundMethod
     */
    capture(balances) {
        return {
            balance: this.H.capture(balances.balance),
            available: this.H.capture(balances.available),
            time: balances.time,
        };
    }
    /**
     * @decorator boundMethod
     */
    restore(snapshot) {
        return this.create({
            balance: this.H.restore(snapshot.balance),
            available: this.H.restore(snapshot.available),
            time: snapshot.time,
        });
    }
}
__decorate([
    autobind_decorator_1.boundMethod
], BalancesStatic.prototype, "create", null);
__decorate([
    autobind_decorator_1.boundMethod
], BalancesStatic.prototype, "capture", null);
__decorate([
    autobind_decorator_1.boundMethod
], BalancesStatic.prototype, "restore", null);
exports.BalancesStatic = BalancesStatic;
//# sourceMappingURL=balances.js.map