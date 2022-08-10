import { Startable } from 'startable';
import { ContextLike } from './context-like';
import { HLike } from './data-types/h';
/**
 * `ctx` is startable and is aggregated by strategy via assart().
 * Therefore, strategy shouldn't use ctx during `STARTING`.
 */
export interface StrategyLike {
    $s: Startable;
}
export interface StrategyStaticLike<H extends HLike<H>> {
    new (ctx: ContextLike<H>): StrategyLike;
}
