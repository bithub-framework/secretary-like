"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookOrderStatic = void 0;
class BookOrderStatic {
    constructor(H) {
        this.H = H;
    }
    capture(order) {
        return {
            price: this.H.capture(order.price),
            quantity: this.H.capture(order.quantity),
            side: order.side,
        };
    }
    restore(snapshot) {
        return {
            price: this.H.restore(snapshot.price),
            quantity: this.H.restore(snapshot.quantity),
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
exports.BookOrderStatic = BookOrderStatic;
//# sourceMappingURL=book-order.js.map