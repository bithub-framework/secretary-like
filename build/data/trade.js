"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Trade = void 0;
var Trade;
(function (Trade) {
    class Static {
        constructor(H) {
            this.H = H;
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
            return {
                side: snapshot.side,
                price: this.H.restore(snapshot.price),
                quantity: this.H.restore(snapshot.quantity),
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
    Trade.Static = Static;
})(Trade = exports.Trade || (exports.Trade = {}));
//# sourceMappingURL=trade.js.map