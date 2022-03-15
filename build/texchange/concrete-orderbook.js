"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConcreteOrderbookStatic = void 0;
const concrete_book_order_1 = require("./concrete-book-order");
const side_1 = require("../secretaries/side");
class ConcreteOrderbookStatic {
    constructor(H) {
        this.H = H;
        this.BookOrder = new concrete_book_order_1.ConcreteBookOrderStatic(this.H);
    }
    capture(orderbook) {
        return {
            [side_1.Side.ASK]: orderbook[side_1.Side.ASK].map(this.BookOrder.capture),
            [side_1.Side.BID]: orderbook[side_1.Side.BID].map(this.BookOrder.capture),
            time: Number.isFinite(orderbook.time) ? orderbook.time : null,
        };
    }
    restore(snapshot) {
        return {
            [side_1.Side.ASK]: snapshot[side_1.Side.ASK].map(this.BookOrder.restore),
            [side_1.Side.BID]: snapshot[side_1.Side.BID].map(this.BookOrder.restore),
            time: snapshot.time !== null ? snapshot.time : Number.NEGATIVE_INFINITY,
        };
    }
}
exports.ConcreteOrderbookStatic = ConcreteOrderbookStatic;
//# sourceMappingURL=concrete-orderbook.js.map