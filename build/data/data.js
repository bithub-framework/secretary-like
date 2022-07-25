"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataStatic = void 0;
const limit_order_1 = require("./limit-order");
const open_order_1 = require("./open-order");
const amendment_1 = require("./amendment");
const orderbook_1 = require("./orderbook");
const trade_1 = require("./trade");
const position_1 = require("./position");
const positions_1 = require("./positions");
const book_order_1 = require("./book-order");
const balances_1 = require("./balances");
class DataStatic {
    constructor(H) {
        this.H = H;
        this.LimitOrder = new limit_order_1.LimitOrder.Static(this.H);
        this.OpenOrder = new open_order_1.OpenOrder.Static(this.H);
        this.Amendment = new amendment_1.Amendment.Static(this.H);
        this.BookOrder = new book_order_1.BookOrder.Static(this.H);
        this.Orderbook = new orderbook_1.Orderbook.Static(this.H);
        this.Trade = new trade_1.Trade.Static(this.H);
        this.Balances = new balances_1.Balances.Static(this.H);
        this.Position = new position_1.Position.Static(this.H);
        this.Positions = new positions_1.Positions.Static(this.H);
    }
}
exports.DataStatic = DataStatic;
//# sourceMappingURL=data.js.map