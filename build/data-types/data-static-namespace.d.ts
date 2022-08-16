import { HLike, SerializableHStatic } from './h';
import { LimitOrderStatic } from './limit-order';
import { OpenOrderStatic } from './open-order';
import { AmendmentStatic } from './amendment';
import { OrderbookStatic } from './orderbook';
import { TradeStatic } from './trade';
import { PositionPairStatic } from './position-pair';
import { BookOrderStatic } from './book-order';
export declare class DataStaticNamespace<H extends HLike<H>> {
    H: SerializableHStatic<H>;
    constructor(H: SerializableHStatic<H>);
    LimitOrder: LimitOrderStatic<H>;
    OpenOrder: OpenOrderStatic<H>;
    Amendment: AmendmentStatic<H>;
    BookOrder: BookOrderStatic<H>;
    Orderbook: OrderbookStatic<H>;
    Trade: TradeStatic<H>;
    PositionPair: PositionPairStatic<H>;
}
