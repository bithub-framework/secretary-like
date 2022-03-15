import { HLike } from '../secretaries/h';
import { TexchangeTradeId } from './trade-id';
import { Trade, TradeStatic } from '../secretaries/trade';
export interface TexchangeTrade<H extends HLike<H>> extends Trade<H, TexchangeTradeId> {
}
export declare namespace TexchangeTrade {
    interface MutablePlain<H extends HLike<H>> extends Trade.MutablePlain<H, TexchangeTradeId> {
    }
}
export declare class TexchangeTradeStatic<H extends HLike<H>> extends TradeStatic<H, TexchangeTradeId> {
}
