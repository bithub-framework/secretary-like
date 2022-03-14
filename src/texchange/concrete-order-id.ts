import { OrderId, OrderIdStatic } from '../context/order-id';


export type ConcreteOrderId = number | string;

export class ConcreteOrderIdStatic implements OrderIdStatic<ConcreteOrderId> {
	capture(id: ConcreteOrderId): OrderId.Snapshot {
		return id;
	}
	restore(snapshot: OrderId.Snapshot): ConcreteOrderId {
		return snapshot;
	}
}

export const ConcreteOrderId: OrderIdStatic<ConcreteOrderId> = new ConcreteOrderIdStatic();
