"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PositionStatic = void 0;
const length_1 = require("./length");
class PositionStatic {
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
exports.PositionStatic = PositionStatic;
//# sourceMappingURL=position.js.map