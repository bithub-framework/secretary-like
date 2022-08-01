"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LimitOrderFactory = void 0;
class ConcreteLimitOrder {
    constructor(source, factory, hFactory) {
        this.factory = factory;
        ({
            side: this.side,
            length: this.length,
            action: this.action,
        } = source);
        this.price = hFactory.from(source.price);
        this.quantity = hFactory.from(source.quantity);
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
    create(source) {
        return new ConcreteLimitOrder(source, this, this.hFactory);
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
        return this.create({
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