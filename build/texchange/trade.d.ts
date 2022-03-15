import { HLike } from '../secretaries/h';
import { TechangeTradeId } from './trade-id';
import { Trade } from '../secretaries/trade';
export interface ConcreteTrade<H extends HLike<H>> extends Trade<H, TechangeTradeId> {
}
export declare namespace ConcreteTrade {
    interface MutablePlain<H extends HLike<H>> extends Trade.MutablePlain<H, TechangeTradeId> {
    }
}
