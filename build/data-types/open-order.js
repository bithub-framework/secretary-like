"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpenOrderStatic = exports.OpenOrderLike = void 0;
const limit_order_1 = require("./limit-order");
class OpenOrderLike extends limit_order_1.LimitOrderLike {
    constructor(source, H) {
        super(source, H);
        this.filled = H.create(source.filled);
        this.unfilled = H.create(source.unfilled);
        this.id = source.id;
    }
}
exports.OpenOrderLike = OpenOrderLike;
class OpenOrder extends OpenOrderLike {
    constructor(source, OpenOrder, H) {
        super(source, H);
        this.OpenOrder = OpenOrder;
    }
    toJSON() {
        return this.OpenOrder.capture(this);
    }
    toString() {
        return JSON.stringify(this.toJSON());
    }
}
class OpenOrderStatic {
    constructor(H, LimitOrder) {
        this.H = H;
        this.LimitOrder = LimitOrder;
    }
    create(source) {
        return new OpenOrder(source, this, this.H);
    }
    capture(order) {
        return {
            ...this.LimitOrder.capture(order),
            filled: this.H.capture(order.filled),
            unfilled: this.H.capture(order.unfilled),
            id: order.id,
        };
    }
    restore(snapshot) {
        return this.create({
            ...this.LimitOrder.restore(snapshot),
            filled: this.H.restore(snapshot.filled),
            unfilled: this.H.restore(snapshot.unfilled),
            id: snapshot.id,
        });
    }
}
exports.OpenOrderStatic = OpenOrderStatic;
//# sourceMappingURL=open-order.js.map