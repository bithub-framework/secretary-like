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
export declare class DataStatic<H extends HLike<H>> {
    H: H.Static<H>;
    constructor(H: H.Static<H>);
    LimitOrder: LimitOrder.Static<H>;
    OpenOrder: OpenOrder.Static<H>;
    Amendment: Amendment.Static<H>;
    BookOrder: BookOrder.Static<H>;
    Orderbook: Orderbook.Static<H>;
    Trade: Trade.Static<H>;
    Balances: Balances.Static<H>;
    Position: Position.Static<H>;
    Positions: Positions.Static<H>;
}
