import { OrderId, OrderIdStatic } from '../secretaries/order-id';


export type TexchangeOrderId = number | string;

export class TexchangeOrderIdStatic implements OrderIdStatic<TexchangeOrderId> {
	public capture(id: TexchangeOrderId): OrderId.Snapshot {
		return id;
	}

	public restore(snapshot: OrderId.Snapshot): TexchangeOrderId {
		return snapshot;
	}
}
