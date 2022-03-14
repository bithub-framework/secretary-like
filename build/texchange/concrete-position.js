"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConcretePositionStatic = void 0;
const length_1 = require("../context/length");
class ConcretePositionStatic {
    constructor(ConcreteH) {
        this.ConcreteH = ConcreteH;
    }
    capture(position) {
        return {
            [length_1.Length.LONG]: this.ConcreteH.capture(position[length_1.Length.LONG]),
            [length_1.Length.SHORT]: this.ConcreteH.capture(position[length_1.Length.SHORT]),
        };
    }
    restore(snapshot) {
        return {
            [length_1.Length.LONG]: this.ConcreteH.restore(snapshot[length_1.Length.LONG]),
            [length_1.Length.SHORT]: this.ConcreteH.restore(snapshot[length_1.Length.SHORT]),
        };
    }
}
exports.ConcretePositionStatic = ConcretePositionStatic;
//# sourceMappingURL=concrete-position.js.map