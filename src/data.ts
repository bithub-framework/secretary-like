import { H } from './h';


export type Side = number;
export namespace Side {
    export const BID: Side = 1;
    export const ASK: Side = -1;
}

export type Length = number;
export namespace Length {
    export const LONG: Length = 1;
    export const SHORT: Length = -1;
}

export type Operation = number;
export namespace Operation {
    export const OPEN: Operation = 1;
    export const CLOSE: Operation = -1;
}


export type TradeId = unknown;
export namespace TradeId {
    export type Snapshot = number | string;
}
export interface TradeIdStatic<ConcreteTradeId extends TradeId> {
    capture(id: ConcreteTradeId): TradeId.Snapshot;
    restore(snapshot: TradeId.Snapshot): ConcreteTradeId;
}


export type OrderId = unknown;
export namespace OrderId {
    export type Snapshot = number | string;
}
export interface OrderIdStatic<ConcreteOrderId extends OrderId> {
    capture(id: ConcreteOrderId): OrderId.Snapshot;
    restore(snapshot: OrderId.Snapshot): ConcreteOrderId;
}


export interface LimitOrder {
    readonly price: H;
    readonly quantity: H;
    readonly side: Side;
    readonly length: Length;
    readonly operation: Operation;
}
export namespace LimitOrder {
    export interface MutablePlain {
        price: H;
        quantity: H;
        side: Side;
        length: Length;
        operation: Operation;
    }
    export interface Snapshot {
        readonly price: H.Snapshot;
        readonly quantity: H.Snapshot;
        readonly side: Side;
        readonly length: Length;
        readonly operation: Operation;
    }
}
export interface LimitOrderStatic<
    ConcreteLimitOrder extends LimitOrder,
    ConcreteLimitOrderMutablePlain extends LimitOrder.MutablePlain
    > {
    capture(order: ConcreteLimitOrder): LimitOrder.Snapshot;
    restore(snapshot: LimitOrder.Snapshot): ConcreteLimitOrderMutablePlain;
}


export interface OpenOrder extends LimitOrder {
    readonly filled: H;
    readonly unfilled: H;
    readonly id: OrderId;
}
export namespace OpenOrder {
    export interface MutablePlain extends LimitOrder.MutablePlain {
        filled: H;
        unfilled: H;
        id: OrderId;
    }
    export interface Snapshot extends LimitOrder.Snapshot {
        readonly filled: string;
        readonly unfilled: string;
        readonly id: OrderId.Snapshot
    }
}
export interface OpenOrderStatic<
    ConcreteOpenOrder extends OpenOrder,
    ConcreteOpenOrderMutablePlain extends OpenOrder.MutablePlain
    > {
    capture(order: ConcreteOpenOrder): OpenOrder.Snapshot;
    restore(snapshot: OpenOrder.Snapshot): ConcreteOpenOrderMutablePlain;
}


export interface Amendment extends OpenOrder {
    readonly newUnfilled: H;
    readonly newPrice: H;
}
export namespace Amendment {
    export interface MutablePlain extends OpenOrder.MutablePlain {
        newUnfilled: H;
        newPrice: H;
    }
    export interface Snapshot extends OpenOrder.Snapshot {
        readonly newUnfilled: H.Snapshot;
        readonly newPrice: H.Snapshot;
    }
}
export interface AmendmentStatic<
    ConcreteAmendment extends Amendment,
    ConcreteAmendmentMutablePlain extends Amendment.MutablePlain
    > {
    capture(amendment: ConcreteAmendment): Amendment.Snapshot;
    restore(snapshot: Amendment.Snapshot): ConcreteAmendmentMutablePlain;
}


export interface OpenMaker extends OpenOrder {
    readonly behind: H;
}
export namespace OpenMaker {
    export interface MutablePlain extends OpenOrder.MutablePlain {
        behind: H;
    }
    export interface Snapshot extends OpenOrder.Snapshot {
        readonly behind: string;
    }
}
export interface OpenMakerStatic<
    ConcreteOpenMaker extends OpenMaker,
    ConcreteOpenMakerMutablePlain extends OpenMaker.MutablePlain
    > {
    capture(order: ConcreteOpenMaker): OpenMaker.Snapshot;
    restore(snapshot: OpenMaker.Snapshot): ConcreteOpenMakerMutablePlain;
}


export interface Trade {
    readonly side: Side;
    readonly price: H;
    readonly quantity: H;
    readonly time: number;
    readonly id: TradeId;
}
export namespace Trade {
    export interface MutablePlain {
        side: Side;
        price: H;
        quantity: H;
        time: number;
        id: TradeId;
    }
    export interface Snapshot {
        readonly side: Side;
        readonly price: string;
        readonly quantity: string;
        readonly time: number;
        readonly id: TradeId.Snapshot;
    }
}
export interface TradeStatic<
    ConcreteTrade extends Trade,
    ConcreteTradeMutablePlain extends Trade.MutablePlain
    > {
    capture(trade: ConcreteTrade): Trade.Snapshot;
    restore(snapshot: Trade.Snapshot): ConcreteTradeMutablePlain;
}


export interface BookOrder {
    readonly price: H;
    readonly quantity: H;
    readonly side: Side,
}
export namespace BookOrder {
    export interface MutablePlain {
        price: H;
        quantity: H;
        side: Side,
    }
    export interface Snapshot {
        readonly price: string;
        readonly quantity: string;
        readonly side: Side;
    }
}
export interface BookOrderStatic<
    ConcreteBookOrder extends BookOrder,
    ConcreteBookOrderMutablePlain extends BookOrder.MutablePlain
    > {
    capture(trade: ConcreteBookOrder): BookOrder.Snapshot;
    restore(snapshot: BookOrder.Snapshot): ConcreteBookOrderMutablePlain;
}


export interface Orderbook {
    readonly [side: Side]: readonly BookOrder[];
    readonly time: number;
}
export namespace Orderbook {
    export interface MutablePlain {
        [side: Side]: BookOrder.MutablePlain[];
        time: number;
    }
    export interface Snapshot {
        readonly [side: Side]: readonly BookOrder.Snapshot[];
        readonly time: number;
    }
}
export interface OrderbookStatic<
    ConcreteOrderbook extends Orderbook,
    ConcreteOrderbookMutablePlain extends Orderbook.MutablePlain
    > {
    capture(trade: ConcreteOrderbook): Orderbook.Snapshot;
    restore(snapshot: Orderbook.Snapshot): ConcreteOrderbookMutablePlain;
}



export interface Closable {
    readonly [length: Length]: H;
}
export namespace Closable {
    export interface MutablePlain {
        [length: Length]: H;
    }
    export interface Snapshot {
        readonly [length: Length]: string;
    }
}
export interface ClosableStatic<
    ConcreteClosable extends Closable,
    ConcreteClosableMutablePlain extends Closable.MutablePlain
    > {
    capture(trade: ConcreteClosable): Closable.Snapshot;
    restore(snapshot: Closable.Snapshot): ConcreteClosableMutablePlain;
}



export interface Position {
    readonly [length: Length]: H;
}
export namespace Position {
    export interface MutablePlain {
        [length: Length]: H;
    }
    export interface Snapshot {
        readonly [length: Length]: string;
    }
}
export interface PositionStatic<
    ConcretePosition extends Position,
    ConcretePositionMutablePlain extends Position.MutablePlain
    > {
    capture(trade: ConcretePosition): Position.Snapshot;
    restore(snapshot: Position.Snapshot): ConcretePositionMutablePlain;
}



export interface Positions {
    readonly position: Position;
    readonly closable: Closable;
    readonly time: number;
}
export namespace Positions {
    export interface MutablePlain {
        position: Position.MutablePlain;
        closable: Closable.MutablePlain;
        time: number;
    }
    export interface Snapshot {
        readonly position: Position.Snapshot;
        readonly closable: Closable.Snapshot;
        readonly time: number;
    }
}
export interface PositionsStatic<
    ConcretePositions extends Positions,
    ConcretePositionsMutablePlain extends Positions.MutablePlain
    > {
    capture(trade: ConcretePositions): Positions.Snapshot;
    restore(snapshot: Positions.Snapshot): ConcretePositionsMutablePlain;
}



export interface Balances {
    readonly balance: H;
    readonly available: H;
    readonly time: number;
}
export namespace Balances {
    export interface MutablePlain {
        balance: H;
        available: H;
        time: number;
    }
    export interface Snapshot {
        readonly balance: string;
        readonly available: string;
        readonly time: number;
    }
}
export interface BalancesStatic<
    ConcreteBalances extends Balances,
    ConcreteBalancesMutablePlain extends Balances.MutablePlain
    > {
    capture(trade: ConcreteBalances): Balances.Snapshot;
    restore(snapshot: Balances.Snapshot): ConcreteBalancesMutablePlain;
}
