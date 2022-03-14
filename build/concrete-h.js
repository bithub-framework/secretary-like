"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.H = exports.ConcreteHStatic = exports.ConcreteH = void 0;
const big_js_1 = require("big.js");
const h_1 = require("./h");
class ConcreteH extends h_1.HFriendly {
    constructor(big) {
        super();
        this.value = big;
    }
    plus(x) {
        return new ConcreteH(this.value.plus(x.value));
    }
    minus(x) {
        return new ConcreteH(this.value.minus(x.value));
    }
    times(x) {
        return new ConcreteH(this.value.times(x.value));
    }
    div(x) {
        return new ConcreteH(this.value.div(x.value));
    }
    capture() {
        return this.value.toString();
    }
}
exports.ConcreteH = ConcreteH;
class ConcreteHStatic {
    from(source) {
        return new ConcreteH(new big_js_1.default(source));
    }
    capture(x) {
        return x.capture();
    }
    restore(s) {
        return new ConcreteH(new big_js_1.default(s));
    }
}
exports.ConcreteHStatic = ConcreteHStatic;
const H = new ConcreteHStatic();
exports.H = H;
//# sourceMappingURL=concrete-h.js.map