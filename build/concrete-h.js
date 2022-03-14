"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConcreteH = void 0;
const big_js_1 = require("big.js");
class ConcreteH {
    constructor(big) {
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
    static from(source) {
        return new ConcreteH(new big_js_1.default(source));
    }
    static capture(x) {
        return x.capture();
    }
    static restore(s) {
        return new ConcreteH(new big_js_1.default(s));
    }
}
exports.ConcreteH = ConcreteH;
const hStatic = ConcreteH;
//# sourceMappingURL=concrete-h.js.map