"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpenOrderFactory = void 0;
class OpenOrder {
    constructor(source, factory) {
        this.factory = factory;
        ({
            price: this.price,
            quantity: this.quantity,
            side: this.side,
            length: this.length,
            action: this.action,
            filled: this.filled,
            unfilled: this.unfilled,
            id: this.id,
        } = source);
    }
    toJSON() {
        return this.factory.capture(this);
    }
    toString() {
        return JSON.stringify(this.toJSON());
    }
}
class OpenOrderFactory {
    constructor(hFactory, limitOrderFactory) {
        this.hFactory = hFactory;
        this.limitOrderFactory = limitOrderFactory;
    }
    new(source) {
        return new OpenOrder(source, this);
    }
    capture(order) {
        return {
            ...this.limitOrderFactory.capture(order),
            filled: this.hFactory.capture(order.filled),
            unfilled: this.hFactory.capture(order.unfilled),
            id: order.id,
        };
    }
    restore(snapshot) {
        return this.new({
            ...this.limitOrderFactory.restore(snapshot),
            filled: this.hFactory.restore(snapshot.filled),
            unfilled: this.hFactory.restore(snapshot.unfilled),
            id: snapshot.id,
        });
    }
}
exports.OpenOrderFactory = OpenOrderFactory;
//# sourceMappingURL=open-order.js.map