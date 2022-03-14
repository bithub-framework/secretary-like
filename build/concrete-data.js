"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConcreteBalancesStatic = exports.ConcretePositionsStatic = exports.ConcretePositionStatic = exports.ConcreteClosableStatic = exports.ConcreteOrderbookStatic = exports.ConcreteBookOrderStatic = exports.ConcreteTradeStatic = exports.ConcreteOpenMakerStatic = exports.ConcreteAmendmentStatic = exports.ConcreteOpenOrderStatic = exports.ConcreteLimitOrderStatic = exports.ConcreteOrderIdStatic = exports.ConcreteTradeIdStatic = void 0;
const data_1 = require("./data");
const concrete_h_1 = require("./concrete-h");
class ConcreteTradeIdStatic {
    capture(id) {
        return id;
    }
    restore(snapshot) {
        return snapshot;
    }
}
exports.ConcreteTradeIdStatic = ConcreteTradeIdStatic;
const TradeId = new ConcreteTradeIdStatic();
class ConcreteOrderIdStatic {
    capture(id) {
        return id;
    }
    restore(snapshot) {
        return snapshot;
    }
}
exports.ConcreteOrderIdStatic = ConcreteOrderIdStatic;
const OrderId = new ConcreteOrderIdStatic();
class ConcreteLimitOrderStatic {
    constructor(H) {
        this.H = H;
    }
    capture(order) {
        return {
            price: this.H.capture(order.price),
            quantity: this.H.capture(order.quantity),
            side: order.side,
            length: order.length,
            operation: order.operation,
        };
    }
    restore(snapshot) {
        return {
            price: this.H.restore(snapshot.price),
            quantity: this.H.restore(snapshot.quantity),
            side: snapshot.side,
            length: snapshot.length,
            operation: snapshot.operation,
        };
    }
}
exports.ConcreteLimitOrderStatic = ConcreteLimitOrderStatic;
const LimitOrder = new ConcreteLimitOrderStatic(concrete_h_1.H);
class ConcreteOpenOrderStatic {
    constructor(H, LimitOrder) {
        this.H = H;
        this.LimitOrder = LimitOrder;
    }
    capture(order) {
        return {
            ...this.LimitOrder.capture(order),
            filled: this.H.capture(order.filled),
            unfilled: order.unfilled.toString(),
            id: OrderId.capture(order.id),
        };
    }
    restore(snapshot) {
        return {
            ...this.LimitOrder.restore(snapshot),
            filled: this.H.restore(snapshot.filled),
            unfilled: this.H.restore(snapshot.unfilled),
            id: snapshot.id,
        };
    }
}
exports.ConcreteOpenOrderStatic = ConcreteOpenOrderStatic;
const OpenOrder = new ConcreteOpenOrderStatic(concrete_h_1.H, LimitOrder);
class ConcreteAmendmentStatic {
    constructor(H, OpenOrder) {
        this.H = H;
        this.OpenOrder = OpenOrder;
    }
    capture(amendment) {
        return {
            ...this.OpenOrder.capture(amendment),
            newUnfilled: this.H.capture(amendment.newUnfilled),
            newPrice: this.H.capture(amendment.newPrice),
        };
    }
    restore(snapshot) {
        return {
            ...this.OpenOrder.restore(snapshot),
            newUnfilled: this.H.restore(snapshot.newUnfilled),
            newPrice: this.H.restore(snapshot.newPrice),
        };
    }
}
exports.ConcreteAmendmentStatic = ConcreteAmendmentStatic;
const Amendment = new ConcreteAmendmentStatic(concrete_h_1.H, OpenOrder);
class ConcreteOpenMakerStatic {
    constructor(H, OpenOrder) {
        this.H = H;
        this.OpenOrder = OpenOrder;
    }
    capture(order) {
        return {
            ...this.OpenOrder.capture(order),
            behind: this.H.capture(order.behind),
        };
    }
    restore(snapshot) {
        return {
            ...this.OpenOrder.restore(snapshot),
            behind: this.H.restore(snapshot.behind),
        };
    }
}
exports.ConcreteOpenMakerStatic = ConcreteOpenMakerStatic;
const OpenMaker = new ConcreteOpenMakerStatic(concrete_h_1.H, OpenOrder);
class ConcreteTradeStatic {
    constructor(H, TradeId) {
        this.H = H;
        this.TradeId = TradeId;
    }
    capture(trade) {
        return {
            side: trade.side,
            price: this.H.capture(trade.price),
            quantity: this.H.capture(trade.quantity),
            time: trade.time,
            id: this.TradeId.capture(trade.id),
        };
    }
    restore(snapshot) {
        return {
            side: snapshot.side,
            price: this.H.restore(snapshot.price),
            quantity: this.H.restore(snapshot.quantity),
            time: snapshot.time,
            id: this.TradeId.restore(snapshot.id),
        };
    }
}
exports.ConcreteTradeStatic = ConcreteTradeStatic;
const Trade = new ConcreteTradeStatic(concrete_h_1.H, TradeId);
class ConcreteBookOrderStatic {
    constructor(H) {
        this.H = H;
    }
    capture(order) {
        return {
            price: this.H.capture(order.price),
            quantity: this.H.capture(order.quantity),
            side: order.side,
        };
    }
    restore(snapshot) {
        return {
            price: this.H.restore(snapshot.price),
            quantity: this.H.restore(snapshot.quantity),
            side: snapshot.side,
        };
    }
}
exports.ConcreteBookOrderStatic = ConcreteBookOrderStatic;
const BookOrder = new ConcreteBookOrderStatic(concrete_h_1.H);
class ConcreteOrderbookStatic {
    constructor(BookOrder) {
        this.BookOrder = BookOrder;
    }
    capture(orderbook) {
        return {
            [data_1.Side.ASK]: orderbook[data_1.Side.ASK].map(this.BookOrder.capture),
            [data_1.Side.BID]: orderbook[data_1.Side.BID].map(this.BookOrder.capture),
            time: orderbook.time,
        };
    }
    restore(snapshot) {
        return {
            [data_1.Side.ASK]: snapshot[data_1.Side.ASK].map(this.BookOrder.restore),
            [data_1.Side.BID]: snapshot[data_1.Side.BID].map(this.BookOrder.restore),
            time: snapshot.time,
        };
    }
}
exports.ConcreteOrderbookStatic = ConcreteOrderbookStatic;
const Orderbook = new ConcreteOrderbookStatic(BookOrder);
class ConcreteClosableStatic {
    constructor(H) {
        this.H = H;
    }
    capture(closable) {
        return {
            [data_1.Length.LONG]: this.H.capture(closable[data_1.Length.LONG]),
            [data_1.Length.SHORT]: this.H.capture(closable[data_1.Length.SHORT]),
        };
    }
    restore(snapshot) {
        return {
            [data_1.Length.LONG]: this.H.restore(snapshot[data_1.Length.LONG]),
            [data_1.Length.SHORT]: this.H.restore(snapshot[data_1.Length.SHORT]),
        };
    }
}
exports.ConcreteClosableStatic = ConcreteClosableStatic;
const Closable = new ConcreteClosableStatic(concrete_h_1.H);
class ConcretePositionStatic {
    constructor(H) {
        this.H = H;
    }
    capture(position) {
        return {
            [data_1.Length.LONG]: this.H.capture(position[data_1.Length.LONG]),
            [data_1.Length.SHORT]: this.H.capture(position[data_1.Length.SHORT]),
        };
    }
    restore(snapshot) {
        return {
            [data_1.Length.LONG]: this.H.restore(snapshot[data_1.Length.LONG]),
            [data_1.Length.SHORT]: this.H.restore(snapshot[data_1.Length.SHORT]),
        };
    }
}
exports.ConcretePositionStatic = ConcretePositionStatic;
const Position = new ConcretePositionStatic(concrete_h_1.H);
class ConcretePositionsStatic {
    constructor(Position, Closable) {
        this.Position = Position;
        this.Closable = Closable;
    }
    capture(positions) {
        return {
            position: this.Position.capture(positions.position),
            closable: this.Closable.capture(positions.closable),
            time: positions.time,
        };
    }
    restore(snapshot) {
        return {
            position: this.Position.restore(snapshot.position),
            closable: this.Closable.restore(snapshot.closable),
            time: snapshot.time,
        };
    }
}
exports.ConcretePositionsStatic = ConcretePositionsStatic;
const Positions = new ConcretePositionsStatic(Position, Closable);
class ConcreteBalancesStatic {
    constructor(H) {
        this.H = H;
    }
    capture(balances) {
        return {
            balance: this.H.capture(balances.balance),
            available: this.H.capture(balances.available),
            time: balances.time,
        };
    }
    restore(snapshot) {
        return {
            balance: this.H.restore(snapshot.balance),
            available: this.H.restore(snapshot.available),
            time: snapshot.time,
        };
    }
}
exports.ConcreteBalancesStatic = ConcreteBalancesStatic;
const Balaces = new ConcreteBalancesStatic(concrete_h_1.H);
//# sourceMappingURL=concrete-data.js.map