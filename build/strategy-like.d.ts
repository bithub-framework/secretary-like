import { StartableLike } from 'startable';
import { ContextLike } from './context-like';
import { HLike } from './data-types/h';
export interface StrategyLike {
    $s: StartableLike<[]>;
}
export interface StrategyStaticLike<H extends HLike<H>> {
    new (ctx: ContextLike<H>): StrategyLike;
}
