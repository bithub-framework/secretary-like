"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PositionFactory = exports.Position = void 0;
const length_action_side_1 = require("./length-action-side");
class Position {
}
exports.Position = Position;
class PositionFactory {
    constructor(hFactory) {
        this.hFactory = hFactory;
    }
    capture(position) {
        return {
            long: this.hFactory.capture(position[length_action_side_1.Length.LONG]),
            short: this.hFactory.capture(position[length_action_side_1.Length.SHORT]),
        };
    }
    restore(snapshot) {
        return {
            [length_action_side_1.Length.LONG]: this.hFactory.restore(snapshot.long),
            [length_action_side_1.Length.SHORT]: this.hFactory.restore(snapshot.short),
        };
    }
    copy(position) {
        return {
            [length_action_side_1.Length.LONG]: position[length_action_side_1.Length.LONG],
            [length_action_side_1.Length.SHORT]: position[length_action_side_1.Length.SHORT],
        };
    }
}
exports.PositionFactory = PositionFactory;
//# sourceMappingURL=position.js.map