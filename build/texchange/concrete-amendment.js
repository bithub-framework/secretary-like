"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConcreteAmendmentStatic = void 0;
class ConcreteAmendmentStatic {
    constructor(ConcreteH, ConcreteOpenOrder) {
        this.ConcreteH = ConcreteH;
        this.ConcreteOpenOrder = ConcreteOpenOrder;
    }
    capture(amendment) {
        return {
            ...this.ConcreteOpenOrder.capture(amendment),
            newUnfilled: this.ConcreteH.capture(amendment.newUnfilled),
            newPrice: this.ConcreteH.capture(amendment.newPrice),
        };
    }
    restore(snapshot) {
        return {
            ...this.ConcreteOpenOrder.restore(snapshot),
            newUnfilled: this.ConcreteH.restore(snapshot.newUnfilled),
            newPrice: this.ConcreteH.restore(snapshot.newPrice),
        };
    }
}
exports.ConcreteAmendmentStatic = ConcreteAmendmentStatic;
//# sourceMappingURL=concrete-amendment.js.map