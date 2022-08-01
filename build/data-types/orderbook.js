"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderbookFactory = void 0;
const length_action_side_1 = require("./length-action-side");
class ConcreteOrderbook {
    constructor(source, factory, bookOrderFactory) {
        this.factory = factory;
        for (const side of [length_action_side_1.Side.BID, length_action_side_1.Side.ASK])
            this[side] = source[side].map(order => bookOrderFactory.create(order));
        this.time = source.time;
    }
    toJSON() {
        return this.factory.capture(this);
    }
    toString() {
        return JSON.stringify(this.toJSON());
    }
}
class OrderbookFactory {
    constructor(bookOrderFactory) {
        this.bookOrderFactory = bookOrderFactory;
    }
    create(source) {
        return new ConcreteOrderbook(source, this, this.bookOrderFactory);
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
        return this.create({
            [length_action_side_1.Side.BID]: snapshot.bids.map(orderSnapshot => this.bookOrderFactory.restore(orderSnapshot)),
            [length_action_side_1.Side.ASK]: snapshot.asks.map(orderSnapshot => this.bookOrderFactory.restore(orderSnapshot)),
            time: snapshot.time !== null
                ? snapshot.time
                : Number.NEGATIVE_INFINITY,
        });
    }
}
exports.OrderbookFactory = OrderbookFactory;
//# sourceMappingURL=orderbook.js.map