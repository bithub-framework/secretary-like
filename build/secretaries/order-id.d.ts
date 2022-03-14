export declare namespace OrderId {
    type Snapshot = number | string;
}
export interface OrderIdStatic<ConcreteOrderId> {
    capture(id: ConcreteOrderId): OrderId.Snapshot;
    restore(snapshot: OrderId.Snapshot): ConcreteOrderId;
}
