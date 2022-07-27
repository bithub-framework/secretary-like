"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderbookFactory = exports.Orderbook = void 0;
const length_action_side_1 = require("./length-action-side");
const pair_1 = require("./pair");
class Orderbook extends pair_1.SidePair {
    constructor(bids, asks, time) {
        super(bids, asks);
        this.time = time;
    }
}
exports.Orderbook = Orderbook;
class OrderbookFactory {
    constructor(bookOrderFactory) {
        this.bookOrderFactory = bookOrderFactory;
    }
    capture(orderbook) {
        return {
            bids: orderbook.get(length_action_side_1.Side.BID).map(order => this.bookOrderFactory.capture(order)),
            asks: orderbook.get(length_action_side_1.Side.ASK).map(order => this.bookOrderFactory.capture(order)),
            time: Number.isFinite(orderbook.time)
                ? orderbook.time
                : null,
        };
    }
    restore(snapshot) {
        return new Orderbook(snapshot.bids.map(orderSnapshot => this.bookOrderFactory.restore(orderSnapshot)), snapshot.asks.map(orderSnapshot => this.bookOrderFactory.restore(orderSnapshot)), snapshot.time !== null
            ? snapshot.time
            : Number.NEGATIVE_INFINITY);
    }
    copy(orderbook) {
        return new Orderbook(orderbook.get(length_action_side_1.Side.BID).map(order => this.bookOrderFactory.copy(order)), orderbook.get(length_action_side_1.Side.ASK).map(order => this.bookOrderFactory.copy(order)), orderbook.time);
    }
}
exports.OrderbookFactory = OrderbookFactory;
//# sourceMappingURL=orderbook.js.map