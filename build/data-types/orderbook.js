"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderbookStatic = exports.OrderbookLike = void 0;
const length_action_side_1 = require("./length-action-side");
const autobind_decorator_1 = require("autobind-decorator");
const assert = require("assert");
class OrderbookLike {
    constructor(source, BookOrder) {
        if (source instanceof OrderbookLike) {
            this.bids = source.side(length_action_side_1.BID);
            this.asks = source.side(length_action_side_1.ASK);
        }
        else {
            assert(source.sides[0][0] !== source.sides[1][0]);
            if (source.sides[0][0] === length_action_side_1.BID) {
                this.bids = source.sides[0][1].map(BookOrder.create);
                this.asks = source.sides[1][1].map(BookOrder.create);
            }
            else {
                this.bids = source.sides[1][1].map(BookOrder.create);
                this.asks = source.sides[0][1].map(BookOrder.create);
            }
        }
        this.time = source.time;
    }
    side(side) {
        return side === length_action_side_1.BID ? this.bids : this.asks;
    }
}
exports.OrderbookLike = OrderbookLike;
class Orderbook extends OrderbookLike {
    constructor(source, Orderbook, BookOrder) {
        super(source, BookOrder);
        this.Orderbook = Orderbook;
    }
    toJSON() {
        return this.Orderbook.capture(this);
    }
    toString() {
        return JSON.stringify(this.toJSON());
    }
}
class OrderbookStatic {
    constructor(BookOrder) {
        this.BookOrder = BookOrder;
    }
    /**
     * @decorator boundMethod
     */
    create(source) {
        return new Orderbook(source, this, this.BookOrder);
    }
    /**
     * @decorator boundMethod
     */
    capture(orderbook) {
        return {
            bids: orderbook.side(length_action_side_1.BID).map(this.BookOrder.capture),
            asks: orderbook.side(length_action_side_1.ASK).map(this.BookOrder.capture),
            time: Number.isFinite(orderbook.time)
                ? orderbook.time
                : null,
        };
    }
    /**
     * @decorator boundMethod
     */
    restore(snapshot) {
        return this.create({
            sides: [
                [length_action_side_1.BID, snapshot.bids.map(this.BookOrder.restore)],
                [length_action_side_1.ASK, snapshot.asks.map(this.BookOrder.restore)],
            ],
            time: snapshot.time !== null
                ? snapshot.time
                : Number.NEGATIVE_INFINITY,
        });
    }
}
__decorate([
    autobind_decorator_1.boundMethod
], OrderbookStatic.prototype, "create", null);
__decorate([
    autobind_decorator_1.boundMethod
], OrderbookStatic.prototype, "capture", null);
__decorate([
    autobind_decorator_1.boundMethod
], OrderbookStatic.prototype, "restore", null);
exports.OrderbookStatic = OrderbookStatic;
//# sourceMappingURL=orderbook.js.map