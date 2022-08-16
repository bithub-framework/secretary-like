import { HLike, SerializableHStatic } from './h';
import { LimitOrderStatic } from './limit-order';
import { OpenOrderStatic } from './open-order';
import { AmendmentStatic } from './amendment';
import { OrderbookStatic } from './orderbook';
import { TradeStatic } from './trade';
import { PositionPairStatic } from './position-pair';
import { BookOrderStatic } from './book-order';


export class DataStaticNamespace<H extends HLike<H>> {
	public constructor(
		public H: SerializableHStatic<H>,
	) { }

	public LimitOrder = new LimitOrderStatic<H>(this.H);
	public OpenOrder = new OpenOrderStatic<H>(this.H);
	public Amendment = new AmendmentStatic<H>(this.H);
	public BookOrder = new BookOrderStatic<H>(this.H);
	public Orderbook = new OrderbookStatic<H>(this.BookOrder);
	public Trade = new TradeStatic<H>(this.H);
	public PositionPair = new PositionPairStatic<H>(this.H);
}
