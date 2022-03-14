import { OrderId, OrderIdStatic } from '../secretaries/order-id';
export declare type ConcreteOrderId = number | string;
export declare class ConcreteOrderIdStatic implements OrderIdStatic<ConcreteOrderId> {
    capture(id: ConcreteOrderId): OrderId.Snapshot;
    restore(snapshot: OrderId.Snapshot): ConcreteOrderId;
}
export declare const ConcreteOrderId: OrderIdStatic<ConcreteOrderId>;
