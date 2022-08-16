"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LimitOrderStatic = exports.LimitOrderLike = void 0;
const autobind_decorator_1 = require("autobind-decorator");
/**
 * typeclass
 */
class LimitOrderLike {
    constructor(source, H) {
        ({
            side: this.side,
            length: this.length,
            action: this.action,
        } = source);
        this.price = H.create(source.price);
        this.quantity = H.create(source.quantity);
    }
    toLiteral() {
        return {
            price: this.price,
            quantity: this.quantity,
            side: this.side,
            length: this.length,
            action: this.action,
        };
    }
}
exports.LimitOrderLike = LimitOrderLike;
/**
 * type
 * @sealed
 */
class LimitOrder extends LimitOrderLike {
    constructor(source, LimitOrder, H) {
        super(source, H);
        this.LimitOrder = LimitOrder;
    }
    setPrice(price) {
        return this.LimitOrder.create({
            ...this.toLiteral(),
            price,
        });
    }
    setQuantity(quantity) {
        return this.LimitOrder.create({
            ...this.toLiteral(),
            quantity,
        });
    }
    setLength(length) {
        return this.LimitOrder.create({
            ...this.toLiteral(),
            length,
        });
    }
    setSide(side) {
        return this.LimitOrder.create({
            ...this.toLiteral(),
            side,
        });
    }
    setAction(action) {
        return this.LimitOrder.create({
            ...this.toLiteral(),
            action,
        });
    }
    toJSON() {
        return this.LimitOrder.capture(this);
    }
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/toString
    // Template string is guaranteed to invoke toString().
    toString() {
        return JSON.stringify(this.toJSON());
    }
}
/**
 * static part of type {@link LimitOrder}
 */
class LimitOrderStatic {
    constructor(H) {
        this.H = H;
    }
    /**
     * @decorator boundMethod
     */
    create(source) {
        return new LimitOrder(source, this, this.H);
    }
    /**
     * @decorator boundMethod
     */
    capture(order) {
        return {
            price: this.H.capture(order.price),
            quantity: this.H.capture(order.quantity),
            side: order.side,
            length: order.length,
            action: order.action,
        };
    }
    /**
     * @decorator boundMethod
     */
    restore(snapshot) {
        return this.create({
            price: this.H.restore(snapshot.price),
            quantity: this.H.restore(snapshot.quantity),
            side: snapshot.side,
            length: snapshot.length,
            action: snapshot.action,
        });
    }
}
__decorate([
    autobind_decorator_1.boundMethod
], LimitOrderStatic.prototype, "create", null);
__decorate([
    autobind_decorator_1.boundMethod
], LimitOrderStatic.prototype, "capture", null);
__decorate([
    autobind_decorator_1.boundMethod
], LimitOrderStatic.prototype, "restore", null);
exports.LimitOrderStatic = LimitOrderStatic;
//# sourceMappingURL=limit-order.js.map