"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PositionPairStatic = exports.PositionPairLike = void 0;
const pairs_1 = require("./pairs");
const autobind_decorator_1 = require("autobind-decorator");
const assert = require("assert");
class PositionPairLike {
    constructor(source, H) {
        if (source instanceof PositionPairLike) {
            this.long = source.length(pairs_1.LONG);
            this.short = source.length(pairs_1.SHORT);
        }
        else {
            assert(source[0][0] !== source[1][0]);
            if (source[0][0] === pairs_1.LONG) {
                this.long = H.create(source[0][1]);
                this.short = H.create(source[1][1]);
            }
            else {
                this.long = H.create(source[1][1]);
                this.short = H.create(source[0][1]);
            }
        }
    }
    toLiteral() {
        return [
            [pairs_1.LONG, this.long],
            [pairs_1.SHORT, this.short],
        ];
    }
    length(length) {
        return length === pairs_1.LONG ? this.long : this.short;
    }
}
exports.PositionPairLike = PositionPairLike;
class PositionPair extends PositionPairLike {
    constructor(source, Position, H) {
        super(source, H);
        this.Position = Position;
    }
    set(length, position) {
        return this.Position.create([
            [length, position],
            [length.i(), this.length(length.i())],
        ]);
    }
    toJSON() {
        return this.Position.capture(this);
    }
    toString() {
        return JSON.stringify(this.toJSON());
    }
}
class PositionPairStatic {
    constructor(H) {
        this.H = H;
    }
    /**
     * @decorator boundMethod
     */
    create(source) {
        return new PositionPair(source, this, this.H);
    }
    /**
     * @decorator boundMethod
     */
    capture(positionPair) {
        return {
            long: this.H.capture(positionPair.length(pairs_1.LONG)),
            short: this.H.capture(positionPair.length(pairs_1.SHORT)),
        };
    }
    /**
     * @decorator boundMethod
     */
    restore(snapshot) {
        return this.create([
            [pairs_1.LONG, snapshot.long],
            [pairs_1.SHORT, snapshot.short],
        ]);
    }
}
__decorate([
    autobind_decorator_1.boundMethod
], PositionPairStatic.prototype, "create", null);
__decorate([
    autobind_decorator_1.boundMethod
], PositionPairStatic.prototype, "capture", null);
__decorate([
    autobind_decorator_1.boundMethod
], PositionPairStatic.prototype, "restore", null);
exports.PositionPairStatic = PositionPairStatic;
//# sourceMappingURL=position-pair.js.map