"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PositionStatic = exports.PositionLike = void 0;
const length_action_side_1 = require("./length-action-side");
const autobind_decorator_1 = require("autobind-decorator");
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
    /**
     * @decorator boundMethod
     */
    create(source) {
        return new Position(source, this, this.H);
    }
    /**
     * @decorator boundMethod
     */
    capture(position) {
        return {
            long: this.H.capture(position.length(length_action_side_1.LONG)),
            short: this.H.capture(position.length(length_action_side_1.SHORT)),
        };
    }
    /**
     * @decorator boundMethod
     */
    restore(snapshot) {
        return this.create({
            long: this.H.restore(snapshot.long),
            short: this.H.restore(snapshot.short),
        });
    }
}
__decorate([
    autobind_decorator_1.boundMethod
], PositionStatic.prototype, "create", null);
__decorate([
    autobind_decorator_1.boundMethod
], PositionStatic.prototype, "capture", null);
__decorate([
    autobind_decorator_1.boundMethod
], PositionStatic.prototype, "restore", null);
exports.PositionStatic = PositionStatic;
//# sourceMappingURL=position.js.map