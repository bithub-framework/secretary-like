"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LimitOrderStatic = exports.LimitOrderLike = void 0;
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
    create(source) {
        return new LimitOrder(source, this, this.H);
    }
    capture(order) {
        return {
            price: this.H.capture(order.price),
            quantity: this.H.capture(order.quantity),
            side: order.side,
            length: order.length,
            action: order.action,
        };
    }
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
exports.LimitOrderStatic = LimitOrderStatic;
//# sourceMappingURL=limit-order.js.map