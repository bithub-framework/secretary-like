"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookOrderStatic = exports.BookOrderLike = void 0;
class BookOrderLike {
    constructor(source, H) {
        this.price = H.create(source.price);
        this.quantity = H.create(source.quantity);
        this.side = source.side;
    }
}
exports.BookOrderLike = BookOrderLike;
class BookOrder extends BookOrderLike {
    constructor(source, BookOrder, H) {
        super(source, H);
        this.BookOrder = BookOrder;
    }
    toJSON() {
        return this.BookOrder.capture(this);
    }
    toString() {
        return JSON.stringify(this.toJSON());
    }
}
class BookOrderStatic {
    constructor(H) {
        this.H = H;
    }
    create(source) {
        return new BookOrder(source, this, this.H);
    }
    capture(order) {
        return {
            price: this.H.capture(order.price),
            quantity: this.H.capture(order.quantity),
            side: order.side,
        };
    }
    restore(snapshot) {
        return this.create({
            price: this.H.restore(snapshot.price),
            quantity: this.H.restore(snapshot.quantity),
            side: snapshot.side,
        });
    }
}
exports.BookOrderStatic = BookOrderStatic;
//# sourceMappingURL=book-order.js.map