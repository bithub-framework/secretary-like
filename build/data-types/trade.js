"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TradeFactory = void 0;
class ConcreteTrade {
    constructor(source, factory) {
        this.factory = factory;
        ({
            side: this.side,
            price: this.price,
            quantity: this.quantity,
            time: this.time,
            id: this.id,
        } = source);
    }
    toJSON() {
        return this.factory.capture(this);
    }
    toString() {
        return JSON.stringify(this.toJSON());
    }
}
class TradeFactory {
    constructor(hFactory) {
        this.hFactory = hFactory;
    }
    create(source) {
        return new ConcreteTrade(source, this);
    }
    capture(trade) {
        return {
            side: trade.side,
            price: this.hFactory.capture(trade.price),
            quantity: this.hFactory.capture(trade.quantity),
            time: trade.time,
            id: trade.id,
        };
    }
    restore(snapshot) {
        return this.create({
            side: snapshot.side,
            price: this.hFactory.restore(snapshot.price),
            quantity: this.hFactory.restore(snapshot.quantity),
            time: snapshot.time,
            id: snapshot.id,
        });
    }
}
exports.TradeFactory = TradeFactory;
//# sourceMappingURL=trade.js.map