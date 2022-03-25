import { HLike } from '../secretaries/data/h';
import { TexchangeTradeId } from './trade-id';
import { Trade, TradeStatic } from '../secretaries/data/trade';



export interface TexchangeTrade<H extends HLike<H>>
	extends Trade<H, TexchangeTradeId> { }


export class TexchangeTradeStatic<H extends HLike<H>>
	extends TradeStatic<H, TexchangeTradeId>{ }
