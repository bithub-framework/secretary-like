"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderbookStatic = void 0;
const book_order_1 = require("./book-order");
const length_action_side_1 = require("./length-action-side");
class OrderbookStatic {
    constructor(H) {
        this.H = H;
        this.BookOrder = new book_order_1.BookOrderStatic(this.H);
    }
    capture(orderbook) {
        return {
            [length_action_side_1.Side.ASK]: orderbook[length_action_side_1.Side.ASK].map(order => this.BookOrder.capture(order)),
            [length_action_side_1.Side.BID]: orderbook[length_action_side_1.Side.BID].map(order => this.BookOrder.capture(order)),
            time: Number.isFinite(orderbook.time)
                ? orderbook.time
                : null,
        };
    }
    restore(snapshot) {
        return {
            [length_action_side_1.Side.ASK]: snapshot[length_action_side_1.Side.ASK].map(orderSnapshot => this.BookOrder.restore(orderSnapshot)),
            [length_action_side_1.Side.BID]: snapshot[length_action_side_1.Side.BID].map(orderSnapshot => this.BookOrder.restore(orderSnapshot)),
            time: snapshot.time !== null
                ? snapshot.time
                : Number.NEGATIVE_INFINITY,
        };
    }
    copy(orderbook) {
        return {
            [length_action_side_1.Side.ASK]: orderbook[length_action_side_1.Side.ASK].map(order => this.BookOrder.copy(order)),
            [length_action_side_1.Side.BID]: orderbook[length_action_side_1.Side.BID].map(order => this.BookOrder.copy(order)),
            time: orderbook.time,
        };
    }
}
exports.OrderbookStatic = OrderbookStatic;
//# sourceMappingURL=orderbook.js.map