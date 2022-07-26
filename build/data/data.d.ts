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
export declare class DataNamespace<H extends HLike<H>> {
    hFactory: HFactory<H>;
    H: HStatic<H>;
    constructor(hFactory: HFactory<H>, H: HStatic<H>);
    limitOrderFactory: LimitOrderFactory<H>;
    openOrderFactory: OpenOrderFactory<H>;
    amendmentFactory: AmendmentFactory<H>;
    bookOrderFactory: BookOrderFactory<H>;
    orderbookFactory: OrderbookFactory<H>;
    tradeFactory: TradeFactory<H>;
    balancesFactory: BalancesFactory<H>;
    positionFactory: PositionFactory<H>;
    positionsFactory: PositionsFactory<H>;
}
