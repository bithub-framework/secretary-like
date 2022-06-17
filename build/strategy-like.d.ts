import { ContextLike } from './context-like';
import { HLike } from './data/h';
import { StartableLike } from 'startable';
export interface StrategyLike extends StartableLike {
}
export interface StrategyStatic<H extends HLike<H>> {
    new (ctx: ContextLike<H>): StrategyLike;
}
