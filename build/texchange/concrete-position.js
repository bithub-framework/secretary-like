"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConcretePositionStatic = void 0;
const length_1 = require("../secretaries/length");
class ConcretePositionStatic {
    constructor(H) {
        this.H = H;
    }
    capture(position) {
        return {
            [length_1.Length.LONG]: this.H.capture(position[length_1.Length.LONG]),
            [length_1.Length.SHORT]: this.H.capture(position[length_1.Length.SHORT]),
        };
    }
    restore(snapshot) {
        return {
            [length_1.Length.LONG]: this.H.restore(snapshot[length_1.Length.LONG]),
            [length_1.Length.SHORT]: this.H.restore(snapshot[length_1.Length.SHORT]),
        };
    }
}
exports.ConcretePositionStatic = ConcretePositionStatic;
//# sourceMappingURL=concrete-position.js.map