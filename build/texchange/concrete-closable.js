"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConcreteClosableStatic = void 0;
const length_1 = require("../context/length");
class ConcreteClosableStatic {
    constructor(ConcreteH) {
        this.ConcreteH = ConcreteH;
    }
    capture(closable) {
        return {
            [length_1.Length.LONG]: this.ConcreteH.capture(closable[length_1.Length.LONG]),
            [length_1.Length.SHORT]: this.ConcreteH.capture(closable[length_1.Length.SHORT]),
        };
    }
    restore(snapshot) {
        return {
            [length_1.Length.LONG]: this.ConcreteH.restore(snapshot[length_1.Length.LONG]),
            [length_1.Length.SHORT]: this.ConcreteH.restore(snapshot[length_1.Length.SHORT]),
        };
    }
}
exports.ConcreteClosableStatic = ConcreteClosableStatic;
//# sourceMappingURL=concrete-closable.js.map