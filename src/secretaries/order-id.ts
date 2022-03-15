export namespace OrderId {
	export type Snapshot = number | string;
}

export interface OrderIdStatic<OrderId> {
	capture(id: OrderId): OrderId.Snapshot;
	restore(snapshot: OrderId.Snapshot): OrderId;
}
