import { HLike, HStatic } from './h';
import { LimitOrderStatic } from './limit-order';
import { OpenOrderStatic } from './open-order';
import { AmendmentStatic } from './amendment';
import { OrderbookStatic } from './orderbook';
import { TradeStatic } from './trade';
import { PositionStatic } from './position';
import { PositionsStatic } from './positions';
import { ClosableStatic } from './closable';
import { BookOrderStatic } from './book-order';
import { BalancesStatic } from './balances';


export class DataStatic<H extends HLike<H>> {
	public constructor(
		public H: HStatic<H>,
	) { }

	public LimitOrder = new LimitOrderStatic(this.H);
	public OpenOrder = new OpenOrderStatic(this.H);
	public Amendment = new AmendmentStatic(this.H);
	public BookOrder = new BookOrderStatic(this.H);
	public Orderbook = new OrderbookStatic(this.H);
	public Trade = new TradeStatic(this.H);
	public Balances = new BalancesStatic(this.H);
	public Position = new PositionStatic(this.H);
	public Positions = new PositionsStatic(this.H);
	public Closable = new ClosableStatic(this.H);
}
