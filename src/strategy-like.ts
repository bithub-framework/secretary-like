import { DaemonLike } from 'startable';
import { ContextLike } from './context/context-like';
import { HLike } from './data-types';



export interface StrategyLike extends DaemonLike { }

export interface StrategyStaticLike<H extends HLike<H>> {
	new(ctx: ContextLike<H>): StrategyLike;
}
