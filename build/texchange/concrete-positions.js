"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConcretePositionsStatic = void 0;
const concrete_position_1 = require("./concrete-position");
const concrete_closable_1 = require("./concrete-closable");
class ConcretePositionsStatic {
    constructor(H) {
        this.H = H;
        this.Position = new concrete_position_1.ConcretePositionStatic(this.H);
        this.Closable = new concrete_closable_1.ConcreteClosableStatic(this.H);
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