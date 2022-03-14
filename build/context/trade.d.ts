import { Side } from './side';
import { HLike, H } from './h';
import { TradeId } from './trade-id';
export interface Trade<ConcreteH extends HLike<ConcreteH>, ConcreteTradeId> {
    readonly side: Side;
    readonly price: ConcreteH;
    readonly quantity: ConcreteH;
    readonly time: number;
    readonly id: ConcreteTradeId;
}
export declare namespace Trade {
    interface MutablePlain<ConcreteH extends HLike<ConcreteH>, ConcreteTradeId> {
        side: Side;
        price: ConcreteH;
        quantity: ConcreteH;
        time: number;
        id: ConcreteTradeId;
    }
    interface Snapshot {
        readonly side: Side;
        readonly price: H.Snapshot;
        readonly quantity: H.Snapshot;
        readonly time: number;
        readonly id: TradeId.Snapshot;
    }
}
export interface TradeStatic<ConcreteH extends HLike<ConcreteH>, ConcreteTradeId> {
    capture(trade: Trade<ConcreteH, ConcreteTradeId>): Trade.Snapshot;
    restore(snapshot: Trade.Snapshot): Trade.MutablePlain<ConcreteH, ConcreteTradeId>;
}
