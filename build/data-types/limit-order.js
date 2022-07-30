"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LimitOrderFactory = void 0;
class LimitOrder {
    constructor(source, factory) {
        this.factory = factory;
        ({
            price: this.price,
            quantity: this.quantity,
            side: this.side,
            length: this.length,
            action: this.action,
        } = source);
    }
    toJSON() {
        return this.factory.capture(this);
    }
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/toString
    // Template string is guaranteed to invoke toString().
    toString() {
        return JSON.stringify(this.toJSON());
    }
}
class LimitOrderFactory {
    constructor(hFactory) {
        this.hFactory = hFactory;
    }
    new(source) {
        return new LimitOrder(source, this);
    }
    capture(order) {
        return {
            price: this.hFactory.capture(order.price),
            quantity: this.hFactory.capture(order.quantity),
            side: order.side,
            length: order.length,
            action: order.action,
        };
    }
    restore(snapshot) {
        return this.new({
            price: this.hFactory.restore(snapshot.price),
            quantity: this.hFactory.restore(snapshot.quantity),
            side: snapshot.side,
            length: snapshot.length,
            action: snapshot.action,
        });
    }
}
exports.LimitOrderFactory = LimitOrderFactory;
//# sourceMappingURL=limit-order.js.map