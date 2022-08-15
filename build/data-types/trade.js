"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TradeStatic = exports.TradeLike = void 0;
class TradeLike {
    constructor(source, H) {
        ({
            side: this.side,
            time: this.time,
            id: this.id,
        } = source);
        this.price = H.create(source.price);
        this.quantity = H.create(source.quantity);
    }
}
exports.TradeLike = TradeLike;
class Trade extends TradeLike {
    constructor(source, Trade, H) {
        super(source, H);
        this.Trade = Trade;
    }
    toJSON() {
        return this.Trade.capture(this);
    }
    toString() {
        return JSON.stringify(this.toJSON());
    }
}
class TradeStatic {
    constructor(H) {
        this.H = H;
    }
    create(source) {
        return new Trade(source, this, this.H);
    }
    capture(trade) {
        return {
            side: trade.side,
            price: this.H.capture(trade.price),
            quantity: this.H.capture(trade.quantity),
            time: trade.time,
            id: trade.id,
        };
    }
    restore(snapshot) {
        return this.create({
            side: snapshot.side,
            price: this.H.restore(snapshot.price),
            quantity: this.H.restore(snapshot.quantity),
            time: snapshot.time,
            id: snapshot.id,
        });
    }
}
exports.TradeStatic = TradeStatic;
//# sourceMappingURL=trade.js.map