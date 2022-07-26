"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpenOrderFactory = void 0;
class OpenOrderFactory {
    constructor(hFactory, limitOrderFactory) {
        this.hFactory = hFactory;
        this.limitOrderFactory = limitOrderFactory;
    }
    capture(order) {
        return {
            ...this.limitOrderFactory.capture(order),
            filled: this.hFactory.capture(order.filled),
            unfilled: this.hFactory.capture(order.unfilled),
            id: order.id,
        };
    }
    restore(snapshot) {
        return {
            ...this.limitOrderFactory.restore(snapshot),
            filled: this.hFactory.restore(snapshot.filled),
            unfilled: this.hFactory.restore(snapshot.unfilled),
            id: snapshot.id,
        };
    }
    copy(order) {
        return {
            ...this.limitOrderFactory.copy(order),
            filled: order.filled,
            unfilled: order.unfilled,
            id: order.id,
        };
    }
}
exports.OpenOrderFactory = OpenOrderFactory;
//# sourceMappingURL=open-order.js.map