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
const closable_1 = require("./closable");
const book_order_1 = require("./book-order");
const balances_1 = require("./balances");
class DataStatic {
    constructor(H) {
        this.H = H;
        this.LimitOrder = new limit_order_1.LimitOrderStatic(this.H);
        this.OpenOrder = new open_order_1.OpenOrderStatic(this.H);
        this.Amendment = new amendment_1.AmendmentStatic(this.H);
        this.BookOrder = new book_order_1.BookOrderStatic(this.H);
        this.Orderbook = new orderbook_1.OrderbookStatic(this.H);
        this.Trade = new trade_1.TradeStatic(this.H);
        this.Balances = new balances_1.BalancesStatic(this.H);
        this.Position = new position_1.PositionStatic(this.H);
        this.Positions = new positions_1.PositionsStatic(this.H);
        this.Closable = new closable_1.ClosableStatic(this.H);
    }
}
exports.DataStatic = DataStatic;
//# sourceMappingURL=data.js.map