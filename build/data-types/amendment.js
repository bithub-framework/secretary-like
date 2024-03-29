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
    toLiteral() {
        return {
            ...super.toLiteral(),
            newPrice: this.newPrice,
            newUnfilled: this.newUnfilled,
        };
    }
}
exports.AmendmentLike = AmendmentLike;
class Amendment extends AmendmentLike {
    constructor(source, Amendment, H) {
        super(source, H);
        this.Amendment = Amendment;
    }
    setPrice(price) {
        return this.Amendment.create({
            ...this.toLiteral(),
            price,
        });
    }
    setQuantity(quantity) {
        return this.Amendment.create({
            ...this.toLiteral(),
            quantity,
        });
    }
    setLength(length) {
        return this.Amendment.create({
            ...this.toLiteral(),
            length,
        });
    }
    setSide(side) {
        return this.Amendment.create({
            ...this.toLiteral(),
            side,
        });
    }
    setAction(action) {
        return this.Amendment.create({
            ...this.toLiteral(),
            action,
        });
    }
    setFilled(filled) {
        return this.Amendment.create({
            ...this.toLiteral(),
            filled,
        });
    }
    setUnfilled(unfilled) {
        return this.Amendment.create({
            ...this.toLiteral(),
            unfilled,
        });
    }
    setId(id) {
        return this.Amendment.create({
            ...this.toLiteral(),
            id,
        });
    }
    setNewPrice(newPrice) {
        return this.Amendment.create({
            ...this.toLiteral(),
            newPrice,
        });
    }
    setNewUnfilled(newUnfilled) {
        return this.Amendment.create({
            ...this.toLiteral(),
            newUnfilled,
        });
    }
    toJSON() {
        return this.Amendment.capture(this);
    }
    toString() {
        return JSON.stringify(this.toJSON());
    }
}
class AmendmentStatic {
    constructor(H) {
        this.H = H;
    }
    create(source) {
        return new Amendment(source, this, this.H);
    }
    capture(amendment) {
        return {
            price: this.H.capture(amendment.price),
            quantity: this.H.capture(amendment.quantity),
            side: amendment.side,
            length: amendment.length,
            action: amendment.action,
            filled: this.H.capture(amendment.filled),
            unfilled: this.H.capture(amendment.unfilled),
            id: amendment.id,
            newUnfilled: this.H.capture(amendment.newUnfilled),
            newPrice: this.H.capture(amendment.newPrice),
        };
    }
    restore(snapshot) {
        return this.create({
            price: this.H.restore(snapshot.price),
            quantity: this.H.restore(snapshot.quantity),
            side: snapshot.side,
            length: snapshot.length,
            action: snapshot.action,
            filled: this.H.restore(snapshot.filled),
            unfilled: this.H.restore(snapshot.unfilled),
            id: snapshot.id,
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