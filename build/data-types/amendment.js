"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AmendmentFactory = void 0;
class ConcreteAmendment {
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
    create(source) {
        return new ConcreteAmendment(source, this);
    }
    capture(amendment) {
        return {
            ...this.openOrderFactory.capture(amendment),
            newUnfilled: this.hFactory.capture(amendment.newUnfilled),
            newPrice: this.hFactory.capture(amendment.newPrice),
        };
    }
    restore(snapshot) {
        return this.create({
            ...this.openOrderFactory.restore(snapshot),
            newUnfilled: this.hFactory.restore(snapshot.newUnfilled),
            newPrice: this.hFactory.restore(snapshot.newPrice),
        });
    }
}
exports.AmendmentFactory = AmendmentFactory;
//# sourceMappingURL=amendment.js.map