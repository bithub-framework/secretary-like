"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookOrderStatic = exports.BookOrderLike = void 0;
const autobind_decorator_1 = require("autobind-decorator");
class BookOrderLike {
    constructor(source, H) {
        this.price = H.create(source.price);
        this.quantity = H.create(source.quantity);
        this.side = source.side;
    }
}
exports.BookOrderLike = BookOrderLike;
class BookOrder extends BookOrderLike {
    constructor(source, BookOrder, H) {
        super(source, H);
        this.BookOrder = BookOrder;
    }
    toJSON() {
        return this.BookOrder.capture(this);
    }
    toString() {
        return JSON.stringify(this.toJSON());
    }
}
class BookOrderStatic {
    constructor(H) {
        this.H = H;
    }
    /**
     * @decorator boundMethod
     */
    create(source) {
        return new BookOrder(source, this, this.H);
    }
    /**
     * @decorator boundMethod
     */
    capture(order) {
        return {
            price: this.H.capture(order.price),
            quantity: this.H.capture(order.quantity),
            side: order.side,
        };
    }
    /**
     * @decorator boundMethod
     */
    restore(snapshot) {
        return this.create({
            price: this.H.restore(snapshot.price),
            quantity: this.H.restore(snapshot.quantity),
            side: snapshot.side,
        });
    }
}
__decorate([
    autobind_decorator_1.boundMethod
], BookOrderStatic.prototype, "create", null);
__decorate([
    autobind_decorator_1.boundMethod
], BookOrderStatic.prototype, "capture", null);
__decorate([
    autobind_decorator_1.boundMethod
], BookOrderStatic.prototype, "restore", null);
exports.BookOrderStatic = BookOrderStatic;
//# sourceMappingURL=book-order.js.map