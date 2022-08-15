"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PositionsStatic = exports.PositionsLike = void 0;
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
    create(source) {
        return new Positions(source, this, this.Position);
    }
    capture(positions) {
        return {
            position: this.Position.capture(positions.position),
            closable: this.Position.capture(positions.closable),
            time: positions.time,
        };
    }
    restore(snapshot) {
        return this.create({
            position: this.Position.restore(snapshot.position),
            closable: this.Position.restore(snapshot.closable),
            time: snapshot.time,
        });
    }
}
exports.PositionsStatic = PositionsStatic;
//# sourceMappingURL=positions.js.map