import { HLike } from '../secretaries/h';
import { TexchangeTradeId } from './trade-id';
import { Trade } from '../secretaries/trade';



export interface ConcreteTrade<H extends HLike<H>>
	extends Trade<H, TexchangeTradeId> { }


export namespace ConcreteTrade {
	export interface MutablePlain<H extends HLike<H>>
		extends Trade.MutablePlain<H, TexchangeTradeId> { }
}
