"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConcreteTradeId = exports.ConcreteTradeIdStatic = void 0;
class ConcreteTradeIdStatic {
    capture(id) {
        return id;
    }
    restore(snapshot) {
        return snapshot;
    }
}
exports.ConcreteTradeIdStatic = ConcreteTradeIdStatic;
exports.ConcreteTradeId = new ConcreteTradeIdStatic();
//# sourceMappingURL=concrete-trade-id.js.map