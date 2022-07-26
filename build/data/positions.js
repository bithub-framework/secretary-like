"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PositionsFactory = void 0;
class PositionsFactory {
    constructor(hFactory, positionFactory) {
        this.hFactory = hFactory;
        this.positionFactory = positionFactory;
    }
    capture(positions) {
        return {
            position: this.positionFactory.capture(positions.position),
            closable: this.positionFactory.capture(positions.closable),
            time: positions.time,
        };
    }
    restore(snapshot) {
        return {
            position: this.positionFactory.restore(snapshot.position),
            closable: this.positionFactory.restore(snapshot.closable),
            time: snapshot.time,
        };
    }
    copy(positions) {
        return {
            position: this.positionFactory.copy(positions.position),
            closable: this.positionFactory.copy(positions.closable),
            time: positions.time,
        };
    }
}
exports.PositionsFactory = PositionsFactory;
//# sourceMappingURL=positions.js.map