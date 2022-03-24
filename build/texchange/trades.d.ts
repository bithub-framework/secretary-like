import { HLike } from '../secretaries/data/h';
import { TexchangeTradeId } from './trade-id';
import { Trades, TradesStatic } from '../secretaries/data/trades';
export interface TexchangeTrades<H extends HLike<H>> extends Trades<H, TexchangeTradeId> {
}
export declare namespace TexchangeTrades {
    interface Functional<H extends HLike<H>> extends Trades.Functional<H, TexchangeTradeId> {
    }
}
export declare class TexchangeTradesStatic<H extends HLike<H>> extends TradesStatic<H, TexchangeTradeId> {
}
