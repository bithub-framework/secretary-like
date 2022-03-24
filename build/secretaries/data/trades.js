"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TradesStatic = void 0;
const trade_1 = require("./trade");
class TradesStatic {
    constructor(H, TradeId) {
        this.H = H;
        this.TradeId = TradeId;
        this.Trade = new trade_1.TradeStatic(this.H, this.TradeId);
    }
    capture(trades) {
        return trades.map(trade => this.Trade.capture(trade));
    }
    restore(snapshot) {
        return snapshot.map(tradeSnapshot => this.Trade.restore(tradeSnapshot));
    }
    copy(trades) {
        return trades.map(trade => this.Trade.copy(trade));
    }
}
exports.TradesStatic = TradesStatic;
//# sourceMappingURL=trades.js.map