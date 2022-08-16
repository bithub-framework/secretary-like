import { HLike, SerializableHStatic } from './h';
import { LimitOrderLike } from './limit-order';
import { OrderId } from './order-id';
import { Length, Side, Action } from './pairs';
import { SerializableStatic } from './serializable';
export declare abstract class OpenOrderLike<H extends HLike<H>> extends LimitOrderLike<H> {
    filled: H;
    unfilled: H;
    id: OrderId;
    constructor(source: OpenOrderLike.Source<H>, H: SerializableHStatic<H>);
    abstract setFilled(filled: HLike.Source<H>): OpenOrderLike<H>;
    abstract setUnfilled(unfilled: HLike.Source<H>): OpenOrderLike<H>;
    abstract setId(id: OrderId): OpenOrderLike<H>;
    toLiteral(): OpenOrderLike.Literal<H>;
}
export declare namespace OpenOrderLike {
    interface Literal<H extends HLike<H>> extends LimitOrderLike.Literal<H> {
        filled: HLike.Source<H>;
        unfilled: HLike.Source<H>;
        id: OrderId;
    }
    type Source<H extends HLike<H>> = OpenOrder<H> | Literal<H>;
    interface Snapshot extends LimitOrderLike.Snapshot {
        readonly filled: HLike.Snapshot;
        readonly unfilled: HLike.Snapshot;
        readonly id: OrderId;
    }
}
export interface SerializableOpenOrderStatic<H extends HLike<H>> extends SerializableStatic<OpenOrderLike.Source<H>, OpenOrderLike<H>, OpenOrderLike.Snapshot> {
}
declare class OpenOrder<H extends HLike<H>> extends OpenOrderLike<H> {
    private OpenOrder;
    constructor(source: OpenOrderLike.Source<H>, OpenOrder: OpenOrderStatic<H>, H: SerializableHStatic<H>);
    setPrice(price: HLike.Source<H>): OpenOrderLike<H>;
    setQuantity(quantity: HLike.Source<H>): OpenOrderLike<H>;
    setLength(length: Length): OpenOrderLike<H>;
    setSide(side: Side): OpenOrderLike<H>;
    setAction(action: Action): OpenOrderLike<H>;
    setFilled(filled: HLike.Source<H>): OpenOrderLike<H>;
    setUnfilled(unfilled: HLike.Source<H>): OpenOrderLike<H>;
    setId(id: OrderId): OpenOrderLike<H>;
    toJSON(): unknown;
    toString(): string;
}
export declare class OpenOrderStatic<H extends HLike<H>> implements SerializableOpenOrderStatic<H> {
    private H;
    constructor(H: SerializableHStatic<H>);
    create(source: OpenOrderLike.Source<H>): OpenOrderLike<H>;
    capture(order: OpenOrderLike<H>): OpenOrderLike.Snapshot;
    restore(snapshot: OpenOrderLike.Snapshot): OpenOrderLike<H>;
}
export {};
