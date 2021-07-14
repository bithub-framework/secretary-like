"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clone = exports.reviver = void 0;
const big_js_1 = require("big.js");
function reviver(k, v) {
    if (k !== 'id' && typeof v === 'string')
        return new big_js_1.default(v);
    else
        return v;
}
exports.reviver = reviver;
function clone(x) {
    return JSON.parse(JSON.stringify(x), reviver);
}
exports.clone = clone;
//# sourceMappingURL=serialization.js.map