import { HLike, HLikeStatic } from './h';
import { LimitOrderStatic } from './limit-order';
import { OpenOrderStatic } from './open-order';
import { AmendmentStatic } from './amendment';
import { OrderbookStatic } from './orderbook';
import { TradeStatic } from './trade';
import { PositionStatic } from './position';
import { PositionsStatic } from './positions';
import { BookOrderStatic } from './book-order';
import { BalancesStatic } from './balances';
export declare class DataStaticNamespace<H extends HLike<H>> {
    H: HLikeStatic<H>;
    constructor(H: HLikeStatic<H>);
    LimitOrder: LimitOrderStatic<H>;
    OpenOrder: OpenOrderStatic<H>;
    Amendment: AmendmentStatic<H>;
    BookOrder: BookOrderStatic<H>;
    Orderbook: OrderbookStatic<H>;
    Trade: TradeStatic<H>;
    Balances: BalancesStatic<H>;
    Position: PositionStatic<H>;
    Positions: PositionsStatic<H>;
}
