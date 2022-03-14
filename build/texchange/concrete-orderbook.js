"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConcreteOrderbookStatic = void 0;
const side_1 = require("../context/side");
class ConcreteOrderbookStatic {
    constructor(ConcreteBookOrder) {
        this.ConcreteBookOrder = ConcreteBookOrder;
    }
    capture(orderbook) {
        return {
            [side_1.Side.ASK]: orderbook[side_1.Side.ASK].map(this.ConcreteBookOrder.capture),
            [side_1.Side.BID]: orderbook[side_1.Side.BID].map(this.ConcreteBookOrder.capture),
            time: orderbook.time,
        };
    }
    restore(snapshot) {
        return {
            [side_1.Side.ASK]: snapshot[side_1.Side.ASK].map(this.ConcreteBookOrder.restore),
            [side_1.Side.BID]: snapshot[side_1.Side.BID].map(this.ConcreteBookOrder.restore),
            time: snapshot.time,
        };
    }
}
exports.ConcreteOrderbookStatic = ConcreteOrderbookStatic;
//# sourceMappingURL=concrete-orderbook.js.map