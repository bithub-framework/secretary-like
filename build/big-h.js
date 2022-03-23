"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BigH = void 0;
const h_1 = require("./secretaries/data/h");
const big_js_1 = require("big.js");
// TODO 单独包
class BigH {
    constructor(big) {
        this.value = big;
    }
    plus(x) {
        if (typeof x === 'number')
            return new BigH(this.value.plus(x));
        if (typeof x === 'string')
            return new BigH(this.value.plus(x));
        return new BigH(this.value.plus(x.value));
    }
    minus(x) {
        if (typeof x === 'number')
            return new BigH(this.value.minus(x));
        if (typeof x === 'string')
            return new BigH(this.value.minus(x));
        return new BigH(this.value.minus(x.value));
    }
    times(x) {
        if (typeof x === 'number')
            return new BigH(this.value.times(x));
        if (typeof x === 'string')
            return new BigH(this.value.times(x));
        return new BigH(this.value.times(x.value));
    }
    div(x) {
        if (typeof x === 'number')
            return new BigH(this.value.div(x));
        if (typeof x === 'string')
            return new BigH(this.value.div(x));
        return new BigH(this.value.div(x.value));
    }
    mod(x) {
        if (typeof x === 'number')
            return new BigH(this.value.mod(x));
        if (typeof x === 'string')
            return new BigH(this.value.mod(x));
        return new BigH(this.value.mod(x.value));
    }
    lt(x) {
        if (typeof x === 'number')
            return this.value.lt(x);
        if (typeof x === 'string')
            return this.value.lt(x);
        return this.value.lt(x.value);
    }
    lte(x) {
        if (typeof x === 'number')
            return this.value.lte(x);
        if (typeof x === 'string')
            return this.value.lte(x);
        return this.value.lte(x.value);
    }
    gt(x) {
        if (typeof x === 'number')
            return this.value.gt(x);
        if (typeof x === 'string')
            return this.value.gt(x);
        return this.value.gt(x.value);
    }
    gte(x) {
        if (typeof x === 'number')
            return this.value.gte(x);
        if (typeof x === 'string')
            return this.value.gte(x);
        return this.value.gte(x.value);
    }
    eq(x) {
        if (typeof x === 'number')
            return this.value.eq(x);
        if (typeof x === 'string')
            return this.value.eq(x);
        return this.value.eq(x.value);
    }
    neq(x) {
        if (typeof x === 'number')
            return !this.value.eq(x);
        if (typeof x === 'string')
            return !this.value.eq(x);
        return !this.value.eq(x.value);
    }
    round(decimalPoint = 0, roundingMode = h_1.H.RoundingMode.HALF_AWAY_FROM_ZERO) {
        return new BigH(new big_js_1.Big(this.value).round(decimalPoint, roundingMode === h_1.H.RoundingMode.AWAY_FROM_ZERO
            ? 3 /* RoundUp */
            : roundingMode === h_1.H.RoundingMode.TOWARDS_ZERO
                ? 0 /* RoundDown */
                : 1 /* RoundHalfUp */));
    }
    toJSON() {
        throw new Error('Use .capture() instead.');
    }
    toString() {
        return this.value.toString();
    }
    toFixed(decimalPoint = 0) {
        return this.value.toFixed(decimalPoint, 0 /* RoundDown */);
    }
    capture() {
        return this.value.toString();
    }
    static from(source) {
        return new BigH(new big_js_1.Big(source));
    }
    static capture(x) {
        return x.capture();
    }
    static restore(s) {
        return new BigH(new big_js_1.Big(s));
    }
}
exports.BigH = BigH;
const hStatic = BigH;
//# sourceMappingURL=big-h.js.map