import { StartableLike } from 'startable';
import { StrategyStatic } from './strategy-like';
import { HLike } from './data/h';


export interface SecretaryLike extends StartableLike {

}

export interface SecretaryStatic<
	H extends HLike<H>,
	OrderId,
	TradeId,
	> {
	new(Strategy: StrategyStatic<H, OrderId, TradeId>): SecretaryLike;
}
