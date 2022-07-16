"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderbookStatic = void 0;
const book_order_1 = require("./book-order");
const side_1 = require("./side");
class OrderbookStatic {
    constructor(H) {
        this.H = H;
        this.BookOrder = new book_order_1.BookOrderStatic(this.H);
    }
    capture(orderbook) {
        return {
            [side_1.Side.ASK]: orderbook[side_1.Side.ASK].map(order => this.BookOrder.capture(order)),
            [side_1.Side.BID]: orderbook[side_1.Side.BID].map(order => this.BookOrder.capture(order)),
            time: Number.isFinite(orderbook.time)
                ? orderbook.time
                : null,
        };
    }
    restore(snapshot) {
        return {
            [side_1.Side.ASK]: snapshot[side_1.Side.ASK].map(orderSnapshot => this.BookOrder.restore(orderSnapshot)),
            [side_1.Side.BID]: snapshot[side_1.Side.BID].map(orderSnapshot => this.BookOrder.restore(orderSnapshot)),
            time: snapshot.time !== null
                ? snapshot.time
                : Number.NEGATIVE_INFINITY,
        };
    }
    copy(orderbook) {
        return {
            [side_1.Side.ASK]: orderbook[side_1.Side.ASK].map(order => this.BookOrder.copy(order)),
            [side_1.Side.BID]: orderbook[side_1.Side.BID].map(order => this.BookOrder.copy(order)),
            time: orderbook.time,
        };
    }
}
exports.OrderbookStatic = OrderbookStatic;
//# sourceMappingURL=orderbook.js.map