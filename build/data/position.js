"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PositionStatic = void 0;
const length_action_side_1 = require("./length-action-side");
class PositionStatic {
    constructor(H) {
        this.H = H;
    }
    capture(position) {
        return {
            [length_action_side_1.Length.LONG]: this.H.capture(position[length_action_side_1.Length.LONG]),
            [length_action_side_1.Length.SHORT]: this.H.capture(position[length_action_side_1.Length.SHORT]),
        };
    }
    restore(snapshot) {
        return {
            [length_action_side_1.Length.LONG]: this.H.restore(snapshot[length_action_side_1.Length.LONG]),
            [length_action_side_1.Length.SHORT]: this.H.restore(snapshot[length_action_side_1.Length.SHORT]),
        };
    }
    copy(position) {
        return {
            [length_action_side_1.Length.LONG]: position[length_action_side_1.Length.LONG],
            [length_action_side_1.Length.SHORT]: position[length_action_side_1.Length.SHORT],
        };
    }
}
exports.PositionStatic = PositionStatic;
//# sourceMappingURL=position.js.map