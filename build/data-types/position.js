"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PositionStatic = exports.PositionLike = void 0;
const length_action_side_1 = require("./length-action-side");
class PositionLike {
    constructor(source, H) {
        if (source instanceof PositionLike) {
            this.long = source.length(length_action_side_1.LONG);
            this.short = source.length(length_action_side_1.SHORT);
        }
        else {
            this.long = H.create(source.long);
            this.short = H.create(source.short);
        }
    }
    length(length) {
        return length === length_action_side_1.LONG ? this.long : this.short;
    }
}
exports.PositionLike = PositionLike;
class Position extends PositionLike {
    constructor(source, Position, H) {
        super(source, H);
        this.Position = Position;
    }
    toJSON() {
        return this.Position.capture(this);
    }
    toString() {
        return JSON.stringify(this.toJSON());
    }
}
class PositionStatic {
    constructor(H) {
        this.H = H;
    }
    create(source) {
        return new Position(source, this, this.H);
    }
    capture(position) {
        return {
            long: this.H.capture(position.length(length_action_side_1.LONG)),
            short: this.H.capture(position.length(length_action_side_1.SHORT)),
        };
    }
    restore(snapshot) {
        return this.create({
            long: this.H.restore(snapshot.long),
            short: this.H.restore(snapshot.short),
        });
    }
}
exports.PositionStatic = PositionStatic;
//# sourceMappingURL=position.js.map