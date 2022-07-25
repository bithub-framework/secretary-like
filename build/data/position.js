"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PositionStatic = exports.Position = void 0;
const length_action_side_1 = require("./length-action-side");
class Position {
    constructor(long, short) {
        this.long = long;
        this.short = short;
    }
    byLength(length) {
        return length === length_action_side_1.Length.LONG
            ? this.long
            : this.short;
    }
}
exports.Position = Position;
class PositionStatic {
    constructor(H) {
        this.H = H;
    }
    capture(position) {
        return {
            long: this.H.capture(position.byLength(length_action_side_1.Length.LONG)),
            short: this.H.capture(position.byLength(length_action_side_1.Length.SHORT)),
        };
    }
    restore(snapshot) {
        return new Position(this.H.restore(snapshot.long), this.H.restore(snapshot.short));
    }
    copy(position) {
        return new Position(position.byLength(length_action_side_1.Length.LONG), position.byLength(length_action_side_1.Length.SHORT));
    }
}
exports.PositionStatic = PositionStatic;
//# sourceMappingURL=position.js.map