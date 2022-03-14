"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConcreteOrderId = exports.ConcreteOrderIdStatic = void 0;
class ConcreteOrderIdStatic {
    capture(id) {
        return id;
    }
    restore(snapshot) {
        return snapshot;
    }
}
exports.ConcreteOrderIdStatic = ConcreteOrderIdStatic;
exports.ConcreteOrderId = new ConcreteOrderIdStatic();
//# sourceMappingURL=concrete-order-id.js.map