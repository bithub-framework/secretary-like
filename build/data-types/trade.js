"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TradeStatic = exports.TradeLike = void 0;
const autobind_decorator_1 = require("autobind-decorator");
class TradeLike {
    constructor(source, H) {
        ({
            side: this.side,
            time: this.time,
            id: this.id,
        } = source);
        this.price = H.create(source.price);
        this.quantity = H.create(source.quantity);
    }
}
exports.TradeLike = TradeLike;
class Trade extends TradeLike {
    constructor(source, Trade, H) {
        super(source, H);
        this.Trade = Trade;
    }
    toJSON() {
        return this.Trade.capture(this);
    }
    toString() {
        return JSON.stringify(this.toJSON());
    }
}
class TradeStatic {
    constructor(H) {
        this.H = H;
    }
    /**
     * @decorator boundMethod
     */
    create(source) {
        return new Trade(source, this, this.H);
    }
    /**
     * @decorator boundMethod
     */
    capture(trade) {
        return {
            side: trade.side,
            price: this.H.capture(trade.price),
            quantity: this.H.capture(trade.quantity),
            time: trade.time,
            id: trade.id,
        };
    }
    /**
     * @decorator boundMethod
     */
    restore(snapshot) {
        return this.create({
            side: snapshot.side,
            price: this.H.restore(snapshot.price),
            quantity: this.H.restore(snapshot.quantity),
            time: snapshot.time,
            id: snapshot.id,
        });
    }
}
__decorate([
    autobind_decorator_1.boundMethod
], TradeStatic.prototype, "create", null);
__decorate([
    autobind_decorator_1.boundMethod
], TradeStatic.prototype, "capture", null);
__decorate([
    autobind_decorator_1.boundMethod
], TradeStatic.prototype, "restore", null);
exports.TradeStatic = TradeStatic;
//# sourceMappingURL=trade.js.map