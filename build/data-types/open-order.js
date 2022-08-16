"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpenOrderStatic = exports.OpenOrderLike = void 0;
const limit_order_1 = require("./limit-order");
const autobind_decorator_1 = require("autobind-decorator");
class OpenOrderLike extends limit_order_1.LimitOrderLike {
    constructor(source, H) {
        super(source, H);
        this.filled = H.create(source.filled);
        this.unfilled = H.create(source.unfilled);
        this.id = source.id;
    }
    toLiteral() {
        return {
            ...super.toLiteral(),
            filled: this.filled,
            unfilled: this.unfilled,
            id: this.id,
        };
    }
}
exports.OpenOrderLike = OpenOrderLike;
class OpenOrder extends OpenOrderLike {
    constructor(source, OpenOrder, H) {
        super(source, H);
        this.OpenOrder = OpenOrder;
    }
    setPrice(price) {
        return this.OpenOrder.create({
            ...this.toLiteral(),
            price,
        });
    }
    setQuantity(quantity) {
        return this.OpenOrder.create({
            ...this.toLiteral(),
            quantity,
        });
    }
    setLength(length) {
        return this.OpenOrder.create({
            ...this.toLiteral(),
            length,
        });
    }
    setSide(side) {
        return this.OpenOrder.create({
            ...this.toLiteral(),
            side,
        });
    }
    setAction(action) {
        return this.OpenOrder.create({
            ...this.toLiteral(),
            action,
        });
    }
    setFilled(filled) {
        return this.OpenOrder.create({
            ...this.toLiteral(),
            filled,
        });
    }
    setUnfilled(unfilled) {
        return this.OpenOrder.create({
            ...this.toLiteral(),
            unfilled,
        });
    }
    setId(id) {
        return this.OpenOrder.create({
            ...this.toLiteral(),
            id,
        });
    }
    toJSON() {
        return this.OpenOrder.capture(this);
    }
    toString() {
        return JSON.stringify(this.toJSON());
    }
}
class OpenOrderStatic {
    constructor(H) {
        this.H = H;
    }
    create(source) {
        return new OpenOrder(source, this, this.H);
    }
    capture(order) {
        return {
            price: this.H.capture(order.price),
            quantity: this.H.capture(order.quantity),
            side: order.side,
            length: order.length,
            action: order.action,
            filled: this.H.capture(order.filled),
            unfilled: this.H.capture(order.unfilled),
            id: order.id,
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
        });
    }
}
__decorate([
    autobind_decorator_1.boundMethod
], OpenOrderStatic.prototype, "create", null);
__decorate([
    autobind_decorator_1.boundMethod
], OpenOrderStatic.prototype, "capture", null);
__decorate([
    autobind_decorator_1.boundMethod
], OpenOrderStatic.prototype, "restore", null);
exports.OpenOrderStatic = OpenOrderStatic;
//# sourceMappingURL=open-order.js.map