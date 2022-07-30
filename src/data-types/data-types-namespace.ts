import { HLike, HFactory, HStatic } from './h';
import { LimitOrderFactory } from './limit-order';
import { OpenOrderFactory } from './open-order';
import { AmendmentFactory } from './amendment';
import { OrderbookFactory } from './orderbook';
import { TradeFactory } from './trade';
import { PositionFactory } from './position';
import { PositionsFactory } from './positions';
import { BookOrderFactory } from './book-order';
import { BalancesFactory } from './balances';


/**
 * All data types support spread operator.
 */
export class DataTypesNamespace<H extends HLike<H>> {
	public constructor(
		public hFactory: HFactory<H>,
		public H: HStatic<H>,
	) { }

	public limitOrderFactory = new LimitOrderFactory<H>(this.hFactory);
	public openOrderFactory = new OpenOrderFactory<H>(this.hFactory, this.limitOrderFactory);
	public amendmentFactory = new AmendmentFactory<H>(this.hFactory, this.openOrderFactory);
	public bookOrderFactory = new BookOrderFactory<H>(this.hFactory);
	public orderbookFactory = new OrderbookFactory<H>(this.bookOrderFactory);
	public tradeFactory = new TradeFactory<H>(this.hFactory);
	public balancesFactory = new BalancesFactory<H>(this.hFactory);
	public positionFactory = new PositionFactory<H>(this.hFactory);
	public positionsFactory = new PositionsFactory<H>(this.positionFactory);
}
