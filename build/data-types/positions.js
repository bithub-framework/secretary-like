"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PositionsStatic = exports.PositionsLike = void 0;
const autobind_decorator_1 = require("autobind-decorator");
class PositionsLike {
    constructor(source, Position) {
        this.position = Position.create(source.position);
        this.closable = Position.create(source.closable);
        this.time = source.time;
    }
}
exports.PositionsLike = PositionsLike;
class Positions extends PositionsLike {
    constructor(source, Positions, Position) {
        super(source, Position);
        this.Positions = Positions;
    }
    toJSON() {
        return this.Positions.capture(this);
    }
    toString() {
        return JSON.stringify(this.toJSON());
    }
}
class PositionsStatic {
    constructor(Position) {
        this.Position = Position;
    }
    /**
     * @decorator boundMethod
     */
    create(source) {
        return new Positions(source, this, this.Position);
    }
    /**
     * @decorator boundMethod
     */
    capture(positions) {
        return {
            position: this.Position.capture(positions.position),
            closable: this.Position.capture(positions.closable),
            time: positions.time,
        };
    }
    /**
     * @decorator boundMethod
     */
    restore(snapshot) {
        return this.create({
            position: this.Position.restore(snapshot.position),
            closable: this.Position.restore(snapshot.closable),
            time: snapshot.time,
        });
    }
}
__decorate([
    autobind_decorator_1.boundMethod
], PositionsStatic.prototype, "create", null);
__decorate([
    autobind_decorator_1.boundMethod
], PositionsStatic.prototype, "capture", null);
__decorate([
    autobind_decorator_1.boundMethod
], PositionsStatic.prototype, "restore", null);
exports.PositionsStatic = PositionsStatic;
//# sourceMappingURL=positions.js.map