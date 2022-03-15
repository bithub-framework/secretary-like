"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConcreteClosableStatic = void 0;
const length_1 = require("../secretaries/length");
class ConcreteClosableStatic {
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
}
exports.ConcreteClosableStatic = ConcreteClosableStatic;
//# sourceMappingURL=concrete-closable.js.map