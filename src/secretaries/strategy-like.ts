import { ContextLike } from './context';
import { HLike } from './data/h';
import { StartableLike } from 'startable';



export interface StrategyLike extends StartableLike { }

export interface StrategyStatic<
	H extends HLike<H>,
	OrderId,
	TradeId,
	> {
	new(ctx: ContextLike<H, OrderId, TradeId>): StrategyLike;
}
