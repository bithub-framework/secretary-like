"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConcreteTradeStatic = void 0;
class ConcreteTradeStatic {
    constructor(ConcreteH, ConcreteTradeId) {
        this.ConcreteH = ConcreteH;
        this.ConcreteTradeId = ConcreteTradeId;
    }
    capture(trade) {
        return {
            side: trade.side,
            price: this.ConcreteH.capture(trade.price),
            quantity: this.ConcreteH.capture(trade.quantity),
            time: trade.time,
            id: this.ConcreteTradeId.capture(trade.id),
        };
    }
    restore(snapshot) {
        return {
            side: snapshot.side,
            price: this.ConcreteH.restore(snapshot.price),
            quantity: this.ConcreteH.restore(snapshot.quantity),
            time: snapshot.time,
            id: this.ConcreteTradeId.restore(snapshot.id),
        };
    }
}
exports.ConcreteTradeStatic = ConcreteTradeStatic;
//# sourceMappingURL=concrete-trade.js.map