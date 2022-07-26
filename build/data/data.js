"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataNamespace = void 0;
const limit_order_1 = require("./limit-order");
const open_order_1 = require("./open-order");
const amendment_1 = require("./amendment");
const orderbook_1 = require("./orderbook");
const trade_1 = require("./trade");
const position_1 = require("./position");
const positions_1 = require("./positions");
const book_order_1 = require("./book-order");
const balances_1 = require("./balances");
class DataNamespace {
    constructor(hFactory) {
        this.hFactory = hFactory;
        this.limitOrderFactory = new limit_order_1.LimitOrderFactory(this.hFactory);
        this.openOrderFactory = new open_order_1.OpenOrderFactory(this.hFactory, this.limitOrderFactory);
        this.amendmentFactory = new amendment_1.AmendmentFactory(this.hFactory, this.openOrderFactory);
        this.bookOrderFactory = new book_order_1.BookOrderFactory(this.hFactory);
        this.orderbookFactory = new orderbook_1.OrderbookFactory(this.bookOrderFactory);
        this.tradeFactory = new trade_1.TradeFactory(this.hFactory);
        this.balancesFactory = new balances_1.BalancesFactory(this.hFactory);
        this.positionFactory = new position_1.PositionFactory(this.hFactory);
        this.positionsFactory = new positions_1.PositionsFactory(this.hFactory, this.positionFactory);
    }
}
exports.DataNamespace = DataNamespace;
//# sourceMappingURL=data.js.map