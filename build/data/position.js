"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PositionFactory = exports.Position = void 0;
const length_action_side_1 = require("./length-action-side");
class Position {
    constructor(long, short) {
        this.long = long;
        this.short = short;
    }
    get(length) {
        if (length === length_action_side_1.Length.LONG)
            return this.long;
        else
            return this.short;
    }
    set(length, position) {
        if (length === length_action_side_1.Length.LONG)
            this.long = position;
        else
            this.short = position;
    }
}
exports.Position = Position;
class PositionFactory {
    constructor(hFactory) {
        this.hFactory = hFactory;
    }
    capture(position) {
        return {
            long: this.hFactory.capture(position.get(length_action_side_1.Length.LONG)),
            short: this.hFactory.capture(position.get(length_action_side_1.Length.SHORT)),
        };
    }
    restore(snapshot) {
        return new Position(this.hFactory.restore(snapshot.long), this.hFactory.restore(snapshot.short));
    }
    copy(position) {
        return new Position(position.get(length_action_side_1.Length.LONG), position.get(length_action_side_1.Length.SHORT));
    }
}
exports.PositionFactory = PositionFactory;
//# sourceMappingURL=position.js.map