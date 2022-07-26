"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TradeFactory = void 0;
class TradeFactory {
    constructor(hFactory) {
        this.hFactory = hFactory;
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
        return {
            side: snapshot.side,
            price: this.hFactory.restore(snapshot.price),
            quantity: this.hFactory.restore(snapshot.quantity),
            time: snapshot.time,
            id: snapshot.id,
        };
    }
    copy(trade) {
        return {
            side: trade.side,
            price: trade.price,
            quantity: trade.quantity,
            time: trade.time,
            id: trade.id,
        };
    }
}
exports.TradeFactory = TradeFactory;
//# sourceMappingURL=trade.js.map