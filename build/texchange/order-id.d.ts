import { OrderId, OrderIdStatic } from '../secretaries/data/order-id';
export declare type TexchangeOrderId = number | string;
export declare class TexchangeOrderIdStatic implements OrderIdStatic<TexchangeOrderId> {
    capture(id: TexchangeOrderId): OrderId.Snapshot;
    restore(snapshot: OrderId.Snapshot): TexchangeOrderId;
}
