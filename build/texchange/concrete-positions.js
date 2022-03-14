"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConcretePositionsStatic = void 0;
class ConcretePositionsStatic {
    constructor(Position, Closable) {
        this.Position = Position;
        this.Closable = Closable;
    }
    capture(positions) {
        return {
            position: this.Position.capture(positions.position),
            closable: this.Closable.capture(positions.closable),
            time: positions.time,
        };
    }
    restore(snapshot) {
        return {
            position: this.Position.restore(snapshot.position),
            closable: this.Closable.restore(snapshot.closable),
            time: snapshot.time,
        };
    }
}
exports.ConcretePositionsStatic = ConcretePositionsStatic;
//# sourceMappingURL=concrete-positions.js.map