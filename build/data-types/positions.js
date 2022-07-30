"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PositionsFactory = void 0;
class ConcretePositions {
    constructor(source, factory, positionFactory) {
        this.factory = factory;
        this.position = positionFactory.new(source.position);
        this.closable = positionFactory.new(source.closable);
        this.time = source.time;
    }
    toJSON() {
        return this.factory.capture(this);
    }
    toString() {
        return JSON.stringify(this.toJSON());
    }
}
class PositionsFactory {
    constructor(positionFactory) {
        this.positionFactory = positionFactory;
    }
    new(source) {
        return new ConcretePositions(source, this, this.positionFactory);
    }
    capture(positions) {
        return {
            position: this.positionFactory.capture(positions.position),
            closable: this.positionFactory.capture(positions.closable),
            time: positions.time,
        };
    }
    restore(snapshot) {
        return this.new({
            position: this.positionFactory.restore(snapshot.position),
            closable: this.positionFactory.restore(snapshot.closable),
            time: snapshot.time,
        });
    }
}
exports.PositionsFactory = PositionsFactory;
//# sourceMappingURL=positions.js.map