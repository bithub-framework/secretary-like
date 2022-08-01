"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpenOrderFactory = void 0;
class ConcreteOpenOrder {
    constructor(source, factory, hFactory) {
        this.factory = factory;
        ({
            side: this.side,
            length: this.length,
            action: this.action,
            filled: this.filled,
            unfilled: this.unfilled,
            id: this.id,
        } = source);
        this.price = hFactory.from(source.price);
        this.quantity = hFactory.from(source.quantity);
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
    create(source) {
        return new ConcreteOpenOrder(source, this, this.hFactory);
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
        return this.create({
            ...this.limitOrderFactory.restore(snapshot),
            filled: this.hFactory.restore(snapshot.filled),
            unfilled: this.hFactory.restore(snapshot.unfilled),
            id: snapshot.id,
        });
    }
}
exports.OpenOrderFactory = OpenOrderFactory;
//# sourceMappingURL=open-order.js.map