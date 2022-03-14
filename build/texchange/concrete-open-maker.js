"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConcreteOpenMakerStatic = void 0;
class ConcreteOpenMakerStatic {
    constructor(ConcreteH, ConcreteOpenOrder) {
        this.ConcreteH = ConcreteH;
        this.ConcreteOpenOrder = ConcreteOpenOrder;
    }
    capture(order) {
        return {
            ...this.ConcreteOpenOrder.capture(order),
            behind: this.ConcreteH.capture(order.behind),
        };
    }
    restore(snapshot) {
        return {
            ...this.ConcreteOpenOrder.restore(snapshot),
            behind: this.ConcreteH.restore(snapshot.behind),
        };
    }
}
exports.ConcreteOpenMakerStatic = ConcreteOpenMakerStatic;
//# sourceMappingURL=concrete-open-maker.js.map