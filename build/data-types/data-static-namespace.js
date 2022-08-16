"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataStaticNamespace = void 0;
const limit_order_1 = require("./limit-order");
const open_order_1 = require("./open-order");
const amendment_1 = require("./amendment");
const orderbook_1 = require("./orderbook");
const trade_1 = require("./trade");
const position_pair_1 = require("./position-pair");
const book_order_1 = require("./book-order");
class DataStaticNamespace {
    constructor(H) {
        this.H = H;
        this.LimitOrder = new limit_order_1.LimitOrderStatic(this.H);
        this.OpenOrder = new open_order_1.OpenOrderStatic(this.H);
        this.Amendment = new amendment_1.AmendmentStatic(this.H);
        this.BookOrder = new book_order_1.BookOrderStatic(this.H);
        this.Orderbook = new orderbook_1.OrderbookStatic(this.BookOrder);
        this.Trade = new trade_1.TradeStatic(this.H);
        this.PositionPair = new position_pair_1.PositionPairStatic(this.H);
    }
}
exports.DataStaticNamespace = DataStaticNamespace;
//# sourceMappingURL=data-static-namespace.js.map