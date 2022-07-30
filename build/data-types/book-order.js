"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookOrderFactory = void 0;
class ConcreteBookOrder {
    constructor(source, factory) {
        this.factory = factory;
        ({
            price: this.price,
            quantity: this.quantity,
            side: this.side,
        } = source);
    }
    toJSON() {
        return this.factory.capture(this);
    }
    toString() {
        return JSON.stringify(this.toJSON());
    }
}
class BookOrderFactory {
    constructor(hFactory) {
        this.hFactory = hFactory;
    }
    new(source) {
        return new ConcreteBookOrder(source, this);
    }
    capture(order) {
        return {
            price: this.hFactory.capture(order.price),
            quantity: this.hFactory.capture(order.quantity),
            side: order.side,
        };
    }
    restore(snapshot) {
        return this.new({
            price: this.hFactory.restore(snapshot.price),
            quantity: this.hFactory.restore(snapshot.quantity),
            side: snapshot.side,
        });
    }
}
exports.BookOrderFactory = BookOrderFactory;
//# sourceMappingURL=book-order.js.map