import { HLike } from '../secretaries/data/h';
import { TexchangeTradeId } from './trade-id';
import { Trade, TradeStatic } from '../secretaries/data/trade';
export interface TexchangeTrade<H extends HLike<H>> extends Trade<H, TexchangeTradeId> {
}
export declare namespace TexchangeTrade {
    interface Functional<H extends HLike<H>> extends Trade.Functional<H, TexchangeTradeId> {
    }
}
export declare class TexchangeTradeStatic<H extends HLike<H>> extends TradeStatic<H, TexchangeTradeId> {
}
