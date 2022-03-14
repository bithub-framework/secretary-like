import {
	LimitOrder, LimitOrderStatic,
	TradeId, TradeIdStatic,
	OrderId, OrderIdStatic,
	OpenOrder, OpenOrderStatic,
	Amendment, AmendmentStatic,
	OpenMaker, OpenMakerStatic,
	Trade, TradeStatic,
	BookOrder, BookOrderStatic,
	Orderbook, OrderbookStatic,
	Closable, ClosableStatic,
	Position, PositionStatic,
	Positions, PositionsStatic,
	Balances, BalancesStatic,
	Side, Length,
} from './data';
import { ConcreteH, ConcreteHStatic, H } from './concrete-h';


type ConcreteTradeId = number | string;
export class ConcreteTradeIdStatic implements TradeIdStatic<ConcreteTradeId> {
	capture(id: ConcreteTradeId): TradeId.Snapshot {
		return id;
	}
	restore(snapshot: TradeId.Snapshot): ConcreteTradeId {
		return snapshot;
	}
}
const TradeId = new ConcreteTradeIdStatic();




export type ConcreteOrderId = number | string;
export class ConcreteOrderIdStatic implements OrderIdStatic<ConcreteOrderId> {
	capture(id: ConcreteOrderId): OrderId.Snapshot {
		return id;
	}
	restore(snapshot: OrderId.Snapshot): ConcreteOrderId {
		return snapshot;
	}
}
const OrderId = new ConcreteOrderIdStatic();




interface ConcreteLimitOrder extends LimitOrder {
	readonly price: ConcreteH;
	readonly quantity: ConcreteH;
}
namespace ConcreteLimitOrder {
	export interface MutablePlain extends LimitOrder.MutablePlain {
		price: ConcreteH;
		quantity: ConcreteH;
	}
}
export class ConcreteLimitOrderStatic implements LimitOrderStatic<
	ConcreteLimitOrder,
	ConcreteLimitOrder.MutablePlain
> {
	public constructor(
		private H: ConcreteHStatic,
	) { }

	capture(order: ConcreteLimitOrder): LimitOrder.Snapshot {
		return {
			price: this.H.capture(order.price),
			quantity: this.H.capture(order.quantity),
			side: order.side,
			length: order.length,
			operation: order.operation,
		}
	}
	restore(snapshot: LimitOrder.Snapshot): ConcreteLimitOrder.MutablePlain {
		return {
			price: this.H.restore(snapshot.price),
			quantity: this.H.restore(snapshot.quantity),
			side: snapshot.side,
			length: snapshot.length,
			operation: snapshot.operation,
		}
	}
}
const LimitOrder = new ConcreteLimitOrderStatic(H);


export type ConcreteOpenOrder = OpenOrder & ConcreteLimitOrder & {
	readonly filled: ConcreteH;
	readonly unfilled: ConcreteH;
	readonly id: ConcreteOrderId;
}
namespace ConcreteOpenOrder {
	export interface MutablePlain extends OpenOrder.MutablePlain {
		id: ConcreteOrderId;
	}
}
export class ConcreteOpenOrderStatic implements OpenOrderStatic<
	ConcreteOpenOrder,
	ConcreteOpenOrder.MutablePlain
>{
	public constructor(
		private H: ConcreteHStatic,
		private LimitOrder: ConcreteLimitOrderStatic,
	) { }

	capture(order: ConcreteOpenOrder): OpenOrder.Snapshot {
		return {
			...this.LimitOrder.capture(order),
			filled: this.H.capture(order.filled),
			unfilled: order.unfilled.toString(),
			id: OrderId.capture(order.id),
		}
	}
	restore(snapshot: OpenOrder.Snapshot): ConcreteOpenOrder.MutablePlain {
		return {
			...this.LimitOrder.restore(snapshot),
			filled: this.H.restore(snapshot.filled),
			unfilled: this.H.restore(snapshot.unfilled),
			id: snapshot.id,
		};
	}
}
const OpenOrder = new ConcreteOpenOrderStatic(H, LimitOrder);




export type ConcreteAmendment = Amendment & ConcreteOpenOrder & {
	readonly newUnfilled: ConcreteH;
	readonly newPrice: ConcreteH;
}
namespace ConcreteAmendment {
	export type MutablePlain = Amendment.MutablePlain
		& ConcreteOpenOrder.MutablePlain
		& {
			newUnfilled: ConcreteH;
			newPrice: ConcreteH;
		};
}
export class ConcreteAmendmentStatic implements AmendmentStatic<
	ConcreteAmendment,
	ConcreteAmendment.MutablePlain
>{
	public constructor(
		private H: ConcreteHStatic,
		private OpenOrder: ConcreteOpenOrderStatic,
	) { }

	capture(amendment: ConcreteAmendment): Amendment.Snapshot {
		return {
			...this.OpenOrder.capture(amendment),
			newUnfilled: this.H.capture(amendment.newUnfilled),
			newPrice: this.H.capture(amendment.newPrice),
		}
	}
	restore(snapshot: Amendment.Snapshot): ConcreteAmendment.MutablePlain {
		return {
			...this.OpenOrder.restore(snapshot),
			newUnfilled: this.H.restore(snapshot.newUnfilled),
			newPrice: this.H.restore(snapshot.newPrice),
		};
	}
}
const Amendment = new ConcreteAmendmentStatic(H, OpenOrder);




export type ConcreteOpenMaker = OpenMaker
	& ConcreteOpenOrder
	& {
		readonly behind: ConcreteH;
	};
namespace ConcreteOpenMaker {
	export type MutablePlain = OpenMaker.MutablePlain
		& ConcreteOpenOrder.MutablePlain
		& {
			behind: ConcreteH;
		};
}
export class ConcreteOpenMakerStatic implements OpenMakerStatic<
	ConcreteOpenMaker,
	ConcreteOpenMaker.MutablePlain
>{
	public constructor(
		private H: ConcreteHStatic,
		private OpenOrder: ConcreteOpenOrderStatic,
	) { }

	capture(order: ConcreteOpenMaker): OpenMaker.Snapshot {
		return {
			...this.OpenOrder.capture(order),
			behind: this.H.capture(order.behind),
		}
	}
	restore(snapshot: OpenMaker.Snapshot): ConcreteOpenMaker.MutablePlain {
		return {
			...this.OpenOrder.restore(snapshot),
			behind: this.H.restore(snapshot.behind),
		}
	}
}
const OpenMaker = new ConcreteOpenMakerStatic(H, OpenOrder)



interface ConcreteTrade extends Trade {
	readonly price: ConcreteH;
	readonly quantity: ConcreteH;
	readonly id: ConcreteTradeId;
}
namespace ConcreteTrade {
	export interface MutablePlain extends Trade.MutablePlain {
		price: ConcreteH;
		quantity: ConcreteH;
		id: ConcreteTradeId;
	}
}
export class ConcreteTradeStatic implements TradeStatic<
	ConcreteTrade,
	ConcreteTrade.MutablePlain
>{
	public constructor(
		private H: ConcreteHStatic,
		private TradeId: ConcreteTradeIdStatic,
	) { }

	capture(trade: ConcreteTrade): Trade.Snapshot {
		return {
			side: trade.side,
			price: this.H.capture(trade.price),
			quantity: this.H.capture(trade.quantity),
			time: trade.time,
			id: this.TradeId.capture(trade.id),
		}
	}
	restore(snapshot: Trade.Snapshot): ConcreteTrade.MutablePlain {
		return {
			side: snapshot.side,
			price: this.H.restore(snapshot.price),
			quantity: this.H.restore(snapshot.quantity),
			time: snapshot.time,
			id: this.TradeId.restore(snapshot.id),
		}
	}
}
const Trade = new ConcreteTradeStatic(H, TradeId);




interface ConcreteBookOrder extends BookOrder {
	readonly price: ConcreteH;
	readonly quantity: ConcreteH;
}
namespace ConcreteBookOrder {
	export interface MutablePlain extends BookOrder.MutablePlain {
		price: ConcreteH;
		quantity: ConcreteH;
	}
}
export class ConcreteBookOrderStatic implements BookOrderStatic<
	ConcreteBookOrder,
	ConcreteBookOrder.MutablePlain
>{
	public constructor(
		private H: ConcreteHStatic,
	) { }

	capture(order: ConcreteBookOrder): BookOrder.Snapshot {
		return {
			price: this.H.capture(order.price),
			quantity: this.H.capture(order.quantity),
			side: order.side,
		}
	}
	restore(snapshot: BookOrder.Snapshot): ConcreteBookOrder.MutablePlain {
		return {
			price: this.H.restore(snapshot.price),
			quantity: this.H.restore(snapshot.quantity),
			side: snapshot.side,
		}
	}
}
const BookOrder = new ConcreteBookOrderStatic(H);




interface ConcreteOrderbook extends Orderbook {
	readonly [side: Side]: readonly ConcreteBookOrder[];
}
namespace ConcreteOrderbook {
	export interface MutablePlain extends Orderbook.MutablePlain {
		[side: Side]: ConcreteBookOrder.MutablePlain[];
	}
}
export class ConcreteOrderbookStatic implements OrderbookStatic<
	ConcreteOrderbook,
	ConcreteOrderbook.MutablePlain
>{
	public constructor(
		private BookOrder: ConcreteBookOrderStatic,
	) { }

	capture(orderbook: ConcreteOrderbook): Orderbook.Snapshot {
		return {
			[Side.ASK]: orderbook[Side.ASK].map(this.BookOrder.capture),
			[Side.BID]: orderbook[Side.BID].map(this.BookOrder.capture),
			time: orderbook.time,
		};
	}
	restore(snapshot: Orderbook.Snapshot): ConcreteOrderbook.MutablePlain {
		return {
			[Side.ASK]: snapshot[Side.ASK].map(this.BookOrder.restore),
			[Side.BID]: snapshot[Side.BID].map(this.BookOrder.restore),
			time: snapshot.time,
		}
	}
}
const Orderbook = new ConcreteOrderbookStatic(BookOrder);




interface ConcreteClosable extends Closable {
	readonly [length: Length]: ConcreteH;
}
namespace ConcreteClosable {
	export interface MutablePlain extends Closable.MutablePlain {
		[length: Length]: ConcreteH;
	}
}
export class ConcreteClosableStatic implements ClosableStatic<
	ConcreteClosable,
	ConcreteClosable.MutablePlain
>{
	public constructor(
		private H: ConcreteHStatic,
	) { }

	capture(closable: ConcreteClosable): Closable.Snapshot {
		return {
			[Length.LONG]: this.H.capture(closable[Length.LONG]),
			[Length.SHORT]: this.H.capture(closable[Length.SHORT]),
		};
	}
	restore(snapshot: Closable.Snapshot): ConcreteClosable.MutablePlain {
		return {
			[Length.LONG]: this.H.restore(snapshot[Length.LONG]),
			[Length.SHORT]: this.H.restore(snapshot[Length.SHORT]),
		}
	}
}
const Closable = new ConcreteClosableStatic(H);




interface ConcretePosition extends Position {
	readonly [length: Length]: ConcreteH;
}
namespace ConcretePosition {
	export interface MutablePlain extends Position.MutablePlain {
		[length: Length]: ConcreteH;
	}
}
export class ConcretePositionStatic implements PositionStatic<
	ConcretePosition,
	ConcretePosition.MutablePlain
>{
	public constructor(
		private H: ConcreteHStatic,
	) { }

	capture(position: ConcretePosition): Position.Snapshot {
		return {
			[Length.LONG]: this.H.capture(position[Length.LONG]),
			[Length.SHORT]: this.H.capture(position[Length.SHORT]),
		};
	}
	restore(snapshot: Position.Snapshot): ConcretePosition.MutablePlain {
		return {
			[Length.LONG]: this.H.restore(snapshot[Length.LONG]),
			[Length.SHORT]: this.H.restore(snapshot[Length.SHORT]),
		}
	}
}
const Position = new ConcretePositionStatic(H);



interface ConcretePositions extends Positions {
	readonly position: ConcretePosition;
	readonly closable: ConcreteClosable;
}
namespace ConcretePositions {
	export interface MutablePlain extends Positions.MutablePlain {
		position: ConcretePosition.MutablePlain;
		closable: ConcreteClosable.MutablePlain;
	}
}
export class ConcretePositionsStatic implements PositionsStatic<
	ConcretePositions,
	ConcretePositions.MutablePlain
>{
	public constructor(
		private Position: ConcretePositionStatic,
		private Closable: ConcreteClosableStatic,
	) { }

	capture(positions: ConcretePositions): Positions.Snapshot {
		return {
			position: this.Position.capture(positions.position),
			closable: this.Closable.capture(positions.closable),
			time: positions.time,
		};
	}
	restore(snapshot: Positions.Snapshot): ConcretePositions.MutablePlain {
		return {
			position: this.Position.restore(snapshot.position),
			closable: this.Closable.restore(snapshot.closable),
			time: snapshot.time,
		}
	}
}
const Positions = new ConcretePositionsStatic(Position, Closable);



interface ConcreteBalances extends Balances {
	readonly balance: ConcreteH;
	readonly available: ConcreteH;
}
namespace ConcreteBalances {
	export interface MutablePlain extends Balances.MutablePlain {
		balance: ConcreteH;
		available: ConcreteH;
	}
}
export class ConcreteBalancesStatic implements BalancesStatic<
	ConcreteBalances,
	ConcreteBalances.MutablePlain
>{
	public constructor(
		private H: ConcreteHStatic,
	) { }

	capture(balances: ConcreteBalances): Balances.Snapshot {
		return {
			balance: this.H.capture(balances.balance),
			available: this.H.capture(balances.available),
			time: balances.time,
		}
	}
	restore(snapshot: Balances.Snapshot): ConcreteBalances.MutablePlain {
		return {
			balance: this.H.restore(snapshot.balance),
			available: this.H.restore(snapshot.available),
			time: snapshot.time,
		};
	}
}
const Balaces = new ConcreteBalancesStatic(H);
