"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderbookStatic = exports.OrderbookLike = void 0;
const length_action_side_1 = require("./length-action-side");
class OrderbookLike {
    constructor(source, BookOrder) {
        if (source instanceof OrderbookLike) {
            this.bids = source.side(length_action_side_1.BID);
            this.asks = source.side(length_action_side_1.ASK);
        }
        else {
            // TODO bind
            this.bids = source.bids.map(BookOrder.create);
            this.asks = source.asks.map(BookOrder.create);
        }
        this.time = source.time;
    }
    side(side) {
        return side === length_action_side_1.BID ? this.bids : this.asks;
    }
}
exports.OrderbookLike = OrderbookLike;
class Orderbook extends OrderbookLike {
    constructor(source, Orderbook, BookOrder) {
        super(source, BookOrder);
        this.Orderbook = Orderbook;
    }
    toJSON() {
        return this.Orderbook.capture(this);
    }
    toString() {
        return JSON.stringify(this.toJSON());
    }
}
class OrderbookStatic {
    constructor(BookOrder) {
        this.BookOrder = BookOrder;
    }
    create(source) {
        return new Orderbook(source, this, this.BookOrder);
    }
    capture(orderbook) {
        return {
            bids: orderbook.side(length_action_side_1.BID).map(this.BookOrder.capture),
            asks: orderbook.side(length_action_side_1.ASK).map(this.BookOrder.capture),
            time: Number.isFinite(orderbook.time)
                ? orderbook.time
                : null,
        };
    }
    restore(snapshot) {
        return this.create({
            bids: snapshot.bids.map(this.BookOrder.restore),
            asks: snapshot.asks.map(this.BookOrder.restore),
            time: snapshot.time !== null
                ? snapshot.time
                : Number.NEGATIVE_INFINITY,
        });
    }
}
exports.OrderbookStatic = OrderbookStatic;
//# sourceMappingURL=orderbook.js.map