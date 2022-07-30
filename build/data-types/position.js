"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PositionFactory = void 0;
const length_action_side_1 = require("./length-action-side");
class ConcretePosition {
    constructor(source, factory) {
        this.factory = factory;
        ({
            [length_action_side_1.Length.LONG]: this[length_action_side_1.Length.LONG],
            [length_action_side_1.Length.SHORT]: this[length_action_side_1.Length.SHORT],
        } = source);
    }
    toJSON() {
        return this.factory.capture(this);
    }
    toString() {
        return JSON.stringify(this.toJSON());
    }
}
class PositionFactory {
    constructor(hFactory) {
        this.hFactory = hFactory;
    }
    new(source) {
        return new ConcretePosition(source, this);
    }
    capture(position) {
        return {
            long: this.hFactory.capture(position[length_action_side_1.Length.LONG]),
            short: this.hFactory.capture(position[length_action_side_1.Length.SHORT]),
        };
    }
    restore(snapshot) {
        return this.new({
            [length_action_side_1.Length.LONG]: this.hFactory.restore(snapshot.long),
            [length_action_side_1.Length.SHORT]: this.hFactory.restore(snapshot.short),
        });
    }
}
exports.PositionFactory = PositionFactory;
//# sourceMappingURL=position.js.map