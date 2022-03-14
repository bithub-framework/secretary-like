import { LimitOrder, LimitOrderStatic, TradeId, TradeIdStatic, OrderId, OrderIdStatic, OpenOrder, OpenOrderStatic, Amendment, AmendmentStatic, OpenMaker, OpenMakerStatic, Trade, TradeStatic, BookOrder, BookOrderStatic, Orderbook, OrderbookStatic, Closable, ClosableStatic, Position, PositionStatic, Positions, PositionsStatic, Balances, BalancesStatic, Side, Length } from './data';
import { ConcreteH, ConcreteHStatic } from './concrete-h';
declare type ConcreteTradeId = number | string;
export declare class ConcreteTradeIdStatic implements TradeIdStatic<ConcreteTradeId> {
    capture(id: ConcreteTradeId): TradeId.Snapshot;
    restore(snapshot: TradeId.Snapshot): ConcreteTradeId;
}
declare const TradeId: ConcreteTradeIdStatic;
export declare type ConcreteOrderId = number | string;
export declare class ConcreteOrderIdStatic implements OrderIdStatic<ConcreteOrderId> {
    capture(id: ConcreteOrderId): OrderId.Snapshot;
    restore(snapshot: OrderId.Snapshot): ConcreteOrderId;
}
declare const OrderId: ConcreteOrderIdStatic;
interface ConcreteLimitOrder extends LimitOrder {
    readonly price: ConcreteH;
    readonly quantity: ConcreteH;
}
declare namespace ConcreteLimitOrder {
    interface MutablePlain extends LimitOrder.MutablePlain {
        price: ConcreteH;
        quantity: ConcreteH;
    }
}
export declare class ConcreteLimitOrderStatic implements LimitOrderStatic<ConcreteLimitOrder, ConcreteLimitOrder.MutablePlain> {
    private H;
    constructor(H: ConcreteHStatic);
    capture(order: ConcreteLimitOrder): LimitOrder.Snapshot;
    restore(snapshot: LimitOrder.Snapshot): ConcreteLimitOrder.MutablePlain;
}
declare const LimitOrder: ConcreteLimitOrderStatic;
export declare type ConcreteOpenOrder = OpenOrder & ConcreteLimitOrder & {
    readonly filled: ConcreteH;
    readonly unfilled: ConcreteH;
    readonly id: ConcreteOrderId;
};
declare namespace ConcreteOpenOrder {
    interface MutablePlain extends OpenOrder.MutablePlain {
        id: ConcreteOrderId;
    }
}
export declare class ConcreteOpenOrderStatic implements OpenOrderStatic<ConcreteOpenOrder, ConcreteOpenOrder.MutablePlain> {
    private H;
    private LimitOrder;
    constructor(H: ConcreteHStatic, LimitOrder: ConcreteLimitOrderStatic);
    capture(order: ConcreteOpenOrder): OpenOrder.Snapshot;
    restore(snapshot: OpenOrder.Snapshot): ConcreteOpenOrder.MutablePlain;
}
declare const OpenOrder: ConcreteOpenOrderStatic;
export declare type ConcreteAmendment = Amendment & ConcreteOpenOrder & {
    readonly newUnfilled: ConcreteH;
    readonly newPrice: ConcreteH;
};
declare namespace ConcreteAmendment {
    type MutablePlain = Amendment.MutablePlain & ConcreteOpenOrder.MutablePlain & {
        newUnfilled: ConcreteH;
        newPrice: ConcreteH;
    };
}
export declare class ConcreteAmendmentStatic implements AmendmentStatic<ConcreteAmendment, ConcreteAmendment.MutablePlain> {
    private H;
    private OpenOrder;
    constructor(H: ConcreteHStatic, OpenOrder: ConcreteOpenOrderStatic);
    capture(amendment: ConcreteAmendment): Amendment.Snapshot;
    restore(snapshot: Amendment.Snapshot): ConcreteAmendment.MutablePlain;
}
declare const Amendment: ConcreteAmendmentStatic;
export declare type ConcreteOpenMaker = OpenMaker & ConcreteOpenOrder & {
    readonly behind: ConcreteH;
};
declare namespace ConcreteOpenMaker {
    type MutablePlain = OpenMaker.MutablePlain & ConcreteOpenOrder.MutablePlain & {
        behind: ConcreteH;
    };
}
export declare class ConcreteOpenMakerStatic implements OpenMakerStatic<ConcreteOpenMaker, ConcreteOpenMaker.MutablePlain> {
    private H;
    private OpenOrder;
    constructor(H: ConcreteHStatic, OpenOrder: ConcreteOpenOrderStatic);
    capture(order: ConcreteOpenMaker): OpenMaker.Snapshot;
    restore(snapshot: OpenMaker.Snapshot): ConcreteOpenMaker.MutablePlain;
}
declare const OpenMaker: ConcreteOpenMakerStatic;
interface ConcreteTrade extends Trade {
    readonly price: ConcreteH;
    readonly quantity: ConcreteH;
    readonly id: ConcreteTradeId;
}
declare namespace ConcreteTrade {
    interface MutablePlain extends Trade.MutablePlain {
        price: ConcreteH;
        quantity: ConcreteH;
        id: ConcreteTradeId;
    }
}
export declare class ConcreteTradeStatic implements TradeStatic<ConcreteTrade, ConcreteTrade.MutablePlain> {
    private H;
    private TradeId;
    constructor(H: ConcreteHStatic, TradeId: ConcreteTradeIdStatic);
    capture(trade: ConcreteTrade): Trade.Snapshot;
    restore(snapshot: Trade.Snapshot): ConcreteTrade.MutablePlain;
}
declare const Trade: ConcreteTradeStatic;
interface ConcreteBookOrder extends BookOrder {
    readonly price: ConcreteH;
    readonly quantity: ConcreteH;
}
declare namespace ConcreteBookOrder {
    interface MutablePlain extends BookOrder.MutablePlain {
        price: ConcreteH;
        quantity: ConcreteH;
    }
}
export declare class ConcreteBookOrderStatic implements BookOrderStatic<ConcreteBookOrder, ConcreteBookOrder.MutablePlain> {
    private H;
    constructor(H: ConcreteHStatic);
    capture(order: ConcreteBookOrder): BookOrder.Snapshot;
    restore(snapshot: BookOrder.Snapshot): ConcreteBookOrder.MutablePlain;
}
declare const BookOrder: ConcreteBookOrderStatic;
interface ConcreteOrderbook extends Orderbook {
    readonly [side: Side]: readonly ConcreteBookOrder[];
}
declare namespace ConcreteOrderbook {
    interface MutablePlain extends Orderbook.MutablePlain {
        [side: Side]: ConcreteBookOrder.MutablePlain[];
    }
}
export declare class ConcreteOrderbookStatic implements OrderbookStatic<ConcreteOrderbook, ConcreteOrderbook.MutablePlain> {
    private BookOrder;
    constructor(BookOrder: ConcreteBookOrderStatic);
    capture(orderbook: ConcreteOrderbook): Orderbook.Snapshot;
    restore(snapshot: Orderbook.Snapshot): ConcreteOrderbook.MutablePlain;
}
declare const Orderbook: ConcreteOrderbookStatic;
interface ConcreteClosable extends Closable {
    readonly [length: Length]: ConcreteH;
}
declare namespace ConcreteClosable {
    interface MutablePlain extends Closable.MutablePlain {
        [length: Length]: ConcreteH;
    }
}
export declare class ConcreteClosableStatic implements ClosableStatic<ConcreteClosable, ConcreteClosable.MutablePlain> {
    private H;
    constructor(H: ConcreteHStatic);
    capture(closable: ConcreteClosable): Closable.Snapshot;
    restore(snapshot: Closable.Snapshot): ConcreteClosable.MutablePlain;
}
declare const Closable: ConcreteClosableStatic;
interface ConcretePosition extends Position {
    readonly [length: Length]: ConcreteH;
}
declare namespace ConcretePosition {
    interface MutablePlain extends Position.MutablePlain {
        [length: Length]: ConcreteH;
    }
}
export declare class ConcretePositionStatic implements PositionStatic<ConcretePosition, ConcretePosition.MutablePlain> {
    private H;
    constructor(H: ConcreteHStatic);
    capture(position: ConcretePosition): Position.Snapshot;
    restore(snapshot: Position.Snapshot): ConcretePosition.MutablePlain;
}
declare const Position: ConcretePositionStatic;
interface ConcretePositions extends Positions {
    readonly position: ConcretePosition;
    readonly closable: ConcreteClosable;
}
declare namespace ConcretePositions {
    interface MutablePlain extends Positions.MutablePlain {
        position: ConcretePosition.MutablePlain;
        closable: ConcreteClosable.MutablePlain;
    }
}
export declare class ConcretePositionsStatic implements PositionsStatic<ConcretePositions, ConcretePositions.MutablePlain> {
    private Position;
    private Closable;
    constructor(Position: ConcretePositionStatic, Closable: ConcreteClosableStatic);
    capture(positions: ConcretePositions): Positions.Snapshot;
    restore(snapshot: Positions.Snapshot): ConcretePositions.MutablePlain;
}
declare const Positions: ConcretePositionsStatic;
interface ConcreteBalances extends Balances {
    readonly balance: ConcreteH;
    readonly available: ConcreteH;
}
declare namespace ConcreteBalances {
    interface MutablePlain extends Balances.MutablePlain {
        balance: ConcreteH;
        available: ConcreteH;
    }
}
export declare class ConcreteBalancesStatic implements BalancesStatic<ConcreteBalances, ConcreteBalances.MutablePlain> {
    private H;
    constructor(H: ConcreteHStatic);
    capture(balances: ConcreteBalances): Balances.Snapshot;
    restore(snapshot: Balances.Snapshot): ConcreteBalances.MutablePlain;
}
export {};
