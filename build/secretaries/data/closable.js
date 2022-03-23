"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClosableStatic = void 0;
const length_1 = require("./length");
class ClosableStatic {
    constructor(H) {
        this.H = H;
    }
    capture(closable) {
        return {
            [length_1.Length.LONG]: this.H.capture(closable[length_1.Length.LONG]),
            [length_1.Length.SHORT]: this.H.capture(closable[length_1.Length.SHORT]),
        };
    }
    restore(snapshot) {
        return {
            [length_1.Length.LONG]: this.H.restore(snapshot[length_1.Length.LONG]),
            [length_1.Length.SHORT]: this.H.restore(snapshot[length_1.Length.SHORT]),
        };
    }
    copy(closable) {
        return {
            [length_1.Length.LONG]: closable[length_1.Length.LONG],
            [length_1.Length.SHORT]: closable[length_1.Length.SHORT],
        };
    }
}
exports.ClosableStatic = ClosableStatic;
//# sourceMappingURL=closable.js.map