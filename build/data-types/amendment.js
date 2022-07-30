"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AmendmentFactory = void 0;
class Amendment {
    constructor(source, factory) {
        this.factory = factory;
        ({
            price: this.price,
            quantity: this.quantity,
            side: this.side,
            length: this.length,
            action: this.action,
            filled: this.filled,
            unfilled: this.unfilled,
            id: this.id,
            newPrice: this.newPrice,
            newUnfilled: this.newUnfilled,
        } = source);
    }
    toJSON() {
        return this.factory.capture(this);
    }
    toString() {
        return JSON.stringify(this.toJSON());
    }
}
class AmendmentFactory {
    constructor(hFactory, openOrderFactory) {
        this.hFactory = hFactory;
        this.openOrderFactory = openOrderFactory;
    }
    new(source) {
        return new Amendment(source, this);
    }
    capture(amendment) {
        return {
            ...this.openOrderFactory.capture(amendment),
            newUnfilled: this.hFactory.capture(amendment.newUnfilled),
            newPrice: this.hFactory.capture(amendment.newPrice),
        };
    }
    restore(snapshot) {
        return this.new({
            price: this.hFactory.restore(snapshot.price),
            quantity: this.hFactory.restore(snapshot.quantity),
            side: snapshot.side,
            length: snapshot.length,
            action: snapshot.action,
            filled: this.hFactory.restore(snapshot.filled),
            unfilled: this.hFactory.restore(snapshot.unfilled),
            id: snapshot.id,
            newUnfilled: this.hFactory.restore(snapshot.newUnfilled),
            newPrice: this.hFactory.restore(snapshot.newPrice),
        });
    }
}
exports.AmendmentFactory = AmendmentFactory;
//# sourceMappingURL=amendment.js.map