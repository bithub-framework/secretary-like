import { Startable } from 'startable';
import { ContextLike } from './context-like';
import { HLike } from './data-types/h';


export interface StrategyLike {
	$s: Startable;
}
export interface StrategyStaticLike<H extends HLike<H>> {
	new(ctx: ContextLike<H>): StrategyLike;
}
