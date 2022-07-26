"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AmendmentFactory = void 0;
class AmendmentFactory {
    constructor(hFactory, openOrderFactory) {
        this.hFactory = hFactory;
        this.openOrderFactory = openOrderFactory;
    }
    capture(amendment) {
        return {
            ...this.openOrderFactory.capture(amendment),
            newUnfilled: this.hFactory.capture(amendment.newUnfilled),
            newPrice: this.hFactory.capture(amendment.newPrice),
        };
    }
    restore(snapshot) {
        return {
            ...this.openOrderFactory.restore(snapshot),
            newUnfilled: this.hFactory.restore(snapshot.newUnfilled),
            newPrice: this.hFactory.restore(snapshot.newPrice),
        };
    }
    copy(amendment) {
        return {
            ...this.openOrderFactory.copy(amendment),
            newUnfilled: amendment.newUnfilled,
            newPrice: amendment.newPrice,
        };
    }
}
exports.AmendmentFactory = AmendmentFactory;
//# sourceMappingURL=amendment.js.map