import { HLike, SerializableHStatic } from './h';
import { LimitOrderStatic } from './limit-order';
import { OpenOrderStatic } from './open-order';
import { AmendmentStatic } from './amendment';
import { OrderbookStatic } from './orderbook';
import { TradeStatic } from './trade';
import { PositionStatic } from './position';
import { PositionsStatic } from './positions';
import { BookOrderStatic } from './book-order';
import { BalancesStatic } from './balances';


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
	public Balances = new BalancesStatic<H>(this.H);
	public Position = new PositionStatic<H>(this.H);
	public Positions = new PositionsStatic<H>(this.Position);
}
