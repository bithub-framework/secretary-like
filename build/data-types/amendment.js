"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AmendmentStatic = exports.AmendmentLike = void 0;
const open_order_1 = require("./open-order");
class AmendmentLike extends open_order_1.OpenOrderLike {
    constructor(source, H) {
        super(source, H);
        this.newPrice = H.create(source.newPrice);
        this.newUnfilled = H.create(source.newUnfilled);
    }
}
exports.AmendmentLike = AmendmentLike;
class ConcreteAmendment extends AmendmentLike {
    constructor(source, Amendment, H) {
        super(source, H);
        this.Amendment = Amendment;
    }
    toJSON() {
        return this.Amendment.capture(this);
    }
    toString() {
        return JSON.stringify(this.toJSON());
    }
}
class AmendmentStatic {
    constructor(H, OpenOrder) {
        this.H = H;
        this.OpenOrder = OpenOrder;
    }
    create(source) {
        return new ConcreteAmendment(source, this, this.H);
    }
    capture(amendment) {
        return {
            ...this.OpenOrder.capture(amendment),
            newUnfilled: this.H.capture(amendment.newUnfilled),
            newPrice: this.H.capture(amendment.newPrice),
        };
    }
    restore(snapshot) {
        return this.create({
            ...this.OpenOrder.restore(snapshot),
            newUnfilled: this.H.restore(snapshot.newUnfilled),
            newPrice: this.H.restore(snapshot.newPrice),
        });
    }
}
exports.AmendmentStatic = AmendmentStatic;
//# sourceMappingURL=amendment.js.map