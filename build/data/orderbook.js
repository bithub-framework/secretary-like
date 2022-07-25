"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Orderbook = void 0;
const book_order_1 = require("./book-order");
const length_action_side_1 = require("./length-action-side");
class Orderbook {
    constructor(bids, asks, time) {
        this.bids = bids;
        this.asks = asks;
        this.time = time;
    }
    get(side) {
        if (side === length_action_side_1.Side.BID)
            return this.bids;
        else
            return this.asks;
    }
    set(side, orders) {
        if (side === length_action_side_1.Side.BID)
            this.bids = orders;
        else
            this.asks = orders;
    }
}
exports.Orderbook = Orderbook;
(function (Orderbook) {
    class Static {
        constructor(H) {
            this.H = H;
            this.BookOrder = new book_order_1.BookOrder.Static(this.H);
        }
        capture(orderbook) {
            return {
                bids: orderbook.get(length_action_side_1.Side.BID).map(order => this.BookOrder.capture(order)),
                asks: orderbook.get(length_action_side_1.Side.ASK).map(order => this.BookOrder.capture(order)),
                time: Number.isFinite(orderbook.time)
                    ? orderbook.time
                    : null,
            };
        }
        restore(snapshot) {
            return new Orderbook(snapshot.bids.map(orderSnapshot => this.BookOrder.restore(orderSnapshot)), snapshot.asks.map(orderSnapshot => this.BookOrder.restore(orderSnapshot)), snapshot.time !== null
                ? snapshot.time
                : Number.NEGATIVE_INFINITY);
        }
        copy(orderbook) {
            return new Orderbook(orderbook.get(length_action_side_1.Side.BID).map(order => this.BookOrder.copy(order)), orderbook.get(length_action_side_1.Side.ASK).map(order => this.BookOrder.copy(order)), orderbook.time);
        }
    }
    Orderbook.Static = Static;
})(Orderbook = exports.Orderbook || (exports.Orderbook = {}));
//# sourceMappingURL=orderbook.js.map