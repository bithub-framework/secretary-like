"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookOrderFactory = void 0;
class BookOrderFactory {
    constructor(hFactory) {
        this.hFactory = hFactory;
    }
    capture(order) {
        return {
            price: this.hFactory.capture(order.price),
            quantity: this.hFactory.capture(order.quantity),
            side: order.side,
        };
    }
    restore(snapshot) {
        return {
            price: this.hFactory.restore(snapshot.price),
            quantity: this.hFactory.restore(snapshot.quantity),
            side: snapshot.side,
        };
    }
    copy(order) {
        return {
            price: order.price,
            quantity: order.quantity,
            side: order.side,
        };
    }
}
exports.BookOrderFactory = BookOrderFactory;
//# sourceMappingURL=book-order.js.map