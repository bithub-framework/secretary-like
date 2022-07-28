"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderbookFactory = void 0;
const length_action_side_1 = require("./length-action-side");
class OrderbookFactory {
    constructor(bookOrderFactory) {
        this.bookOrderFactory = bookOrderFactory;
    }
    capture(orderbook) {
        return {
            bids: orderbook[length_action_side_1.Side.BID].map(order => this.bookOrderFactory.capture(order)),
            asks: orderbook[length_action_side_1.Side.ASK].map(order => this.bookOrderFactory.capture(order)),
            time: Number.isFinite(orderbook.time)
                ? orderbook.time
                : null,
        };
    }
    restore(snapshot) {
        return {
            [length_action_side_1.Side.BID]: snapshot.bids.map(orderSnapshot => this.bookOrderFactory.restore(orderSnapshot)),
            [length_action_side_1.Side.ASK]: snapshot.asks.map(orderSnapshot => this.bookOrderFactory.restore(orderSnapshot)),
            time: snapshot.time !== null
                ? snapshot.time
                : Number.NEGATIVE_INFINITY,
        };
    }
    copy(orderbook) {
        return {
            [length_action_side_1.Side.BID]: orderbook[length_action_side_1.Side.BID].map(order => this.bookOrderFactory.copy(order)),
            [length_action_side_1.Side.ASK]: orderbook[length_action_side_1.Side.ASK].map(order => this.bookOrderFactory.copy(order)),
            time: orderbook.time,
        };
    }
}
exports.OrderbookFactory = OrderbookFactory;
//# sourceMappingURL=orderbook.js.map