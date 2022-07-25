"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PositionsStatic = void 0;
const position_1 = require("./position");
const closable_1 = require("./closable");
class PositionsStatic {
    constructor(H) {
        this.H = H;
        this.Position = new position_1.PositionStatic(this.H);
        this.Closable = new closable_1.ClosableStatic(this.H);
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
    copy(positions) {
        return {
            position: this.Position.copy(positions.position),
            closable: this.Closable.copy(positions.closable),
            time: positions.time,
        };
    }
}
exports.PositionsStatic = PositionsStatic;
//# sourceMappingURL=positions.js.map