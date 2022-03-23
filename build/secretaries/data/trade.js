"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TradeStatic = void 0;
class TradeStatic {
    constructor(H, TradeId) {
        this.H = H;
        this.TradeId = TradeId;
    }
    capture(trade) {
        return {
            side: trade.side,
            price: this.H.capture(trade.price),
            quantity: this.H.capture(trade.quantity),
            time: trade.time,
            id: this.TradeId.capture(trade.id),
        };
    }
    restore(snapshot) {
        return {
            side: snapshot.side,
            price: this.H.restore(snapshot.price),
            quantity: this.H.restore(snapshot.quantity),
            time: snapshot.time,
            id: this.TradeId.restore(snapshot.id),
        };
    }
}
exports.TradeStatic = TradeStatic;
//# sourceMappingURL=trade.js.map