import { HLike, H } from './h';
import { LimitOrder } from './limit-order';
import { OpenOrder } from './open-order';
import { Amendment } from './amendment';
import { Orderbook } from './orderbook';
import { Trade } from './trade';
import { Position } from './position';
import { Positions } from './positions';
import { BookOrder } from './book-order';
import { Balances } from './balances';


export class DataStatic<H extends HLike<H>> {
	public constructor(
		public H: H.Static<H>,
	) { }

	public LimitOrder = new LimitOrder.Static(this.H);
	public OpenOrder = new OpenOrder.Static(this.H);
	public Amendment = new Amendment.Static(this.H);
	public BookOrder = new BookOrder.Static(this.H);
	public Orderbook = new Orderbook.Static(this.H);
	public Trade = new Trade.Static(this.H);
	public Balances = new Balances.Static(this.H);
	public Position = new Position.Static(this.H);
	public Positions = new Positions.Static(this.H);
}
