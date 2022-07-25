"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookOrder = void 0;
var BookOrder;
(function (BookOrder) {
    class Static {
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
    BookOrder.Static = Static;
})(BookOrder = exports.BookOrder || (exports.BookOrder = {}));
//# sourceMappingURL=book-order.js.map