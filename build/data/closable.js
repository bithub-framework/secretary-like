"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClosableStatic = void 0;
const length_action_side_1 = require("./length-action-side");
class ClosableStatic {
    constructor(H) {
        this.H = H;
    }
    capture(closable) {
        return {
            [length_action_side_1.Length.LONG]: this.H.capture(closable[length_action_side_1.Length.LONG]),
            [length_action_side_1.Length.SHORT]: this.H.capture(closable[length_action_side_1.Length.SHORT]),
        };
    }
    restore(snapshot) {
        return {
            [length_action_side_1.Length.LONG]: this.H.restore(snapshot[length_action_side_1.Length.LONG]),
            [length_action_side_1.Length.SHORT]: this.H.restore(snapshot[length_action_side_1.Length.SHORT]),
        };
    }
    copy(closable) {
        return {
            [length_action_side_1.Length.LONG]: closable[length_action_side_1.Length.LONG],
            [length_action_side_1.Length.SHORT]: closable[length_action_side_1.Length.SHORT],
        };
    }
}
exports.ClosableStatic = ClosableStatic;
//# sourceMappingURL=closable.js.map