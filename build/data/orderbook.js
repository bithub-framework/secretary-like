"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderbookFactory = exports.Orderbook = void 0;
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
class OrderbookFactory {
    constructor(bookOrderFactory) {
        this.bookOrderFactory = bookOrderFactory;
    }
    captureOrderbook(orderbook) {
        return {
            bids: orderbook.get(length_action_side_1.Side.BID).map(order => this.bookOrderFactory.capture(order)),
            asks: orderbook.get(length_action_side_1.Side.ASK).map(order => this.bookOrderFactory.capture(order)),
            time: Number.isFinite(orderbook.time)
                ? orderbook.time
                : null,
        };
    }
    restoreOrderbook(snapshot) {
        return new Orderbook(snapshot.bids.map(orderSnapshot => this.bookOrderFactory.restore(orderSnapshot)), snapshot.asks.map(orderSnapshot => this.bookOrderFactory.restore(orderSnapshot)), snapshot.time !== null
            ? snapshot.time
            : Number.NEGATIVE_INFINITY);
    }
    copyOrderbook(orderbook) {
        return new Orderbook(orderbook.get(length_action_side_1.Side.BID).map(order => this.bookOrderFactory.copy(order)), orderbook.get(length_action_side_1.Side.ASK).map(order => this.bookOrderFactory.copy(order)), orderbook.time);
    }
}
exports.OrderbookFactory = OrderbookFactory;
//# sourceMappingURL=orderbook.js.map