"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AmendmentStatic = exports.AmendmentLike = void 0;
const open_order_1 = require("./open-order");
const autobind_decorator_1 = require("autobind-decorator");
class AmendmentLike extends open_order_1.OpenOrderLike {
    constructor(source, H) {
        super(source, H);
        this.newPrice = H.create(source.newPrice);
        this.newUnfilled = H.create(source.newUnfilled);
    }
}
exports.AmendmentLike = AmendmentLike;
class ConcreteAmendment extends AmendmentLike {
    constructor(source, Amendment, H) {
        super(source, H);
        this.Amendment = Amendment;
    }
    toJSON() {
        return this.Amendment.capture(this);
    }
    toString() {
        return JSON.stringify(this.toJSON());
    }
}
class AmendmentStatic {
    constructor(H, OpenOrder) {
        this.H = H;
        this.OpenOrder = OpenOrder;
    }
    /**
     * @decorator boundMethod
     */
    create(source) {
        return new ConcreteAmendment(source, this, this.H);
    }
    /**
     * @decorator boundMethod
     */
    capture(amendment) {
        return {
            ...this.OpenOrder.capture(amendment),
            newUnfilled: this.H.capture(amendment.newUnfilled),
            newPrice: this.H.capture(amendment.newPrice),
        };
    }
    /**
     * @decorator boundMethod
     */
    restore(snapshot) {
        return this.create({
            ...this.OpenOrder.restore(snapshot),
            newUnfilled: this.H.restore(snapshot.newUnfilled),
            newPrice: this.H.restore(snapshot.newPrice),
        });
    }
}
__decorate([
    autobind_decorator_1.boundMethod
], AmendmentStatic.prototype, "create", null);
__decorate([
    autobind_decorator_1.boundMethod
], AmendmentStatic.prototype, "capture", null);
__decorate([
    autobind_decorator_1.boundMethod
], AmendmentStatic.prototype, "restore", null);
exports.AmendmentStatic = AmendmentStatic;
//# sourceMappingURL=amendment.js.map