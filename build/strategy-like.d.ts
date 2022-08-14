import { DaemonLike } from 'startable';
import { ContextLike } from './context-like';
import { HLike } from './data-types/h';
export interface StrategyLike extends DaemonLike {
}
/**
 * `ctx` is startable and is aggregated by strategy via assart().
 * Therefore, strategy shouldn't use ctx during `STARTING`.
 */
export interface StrategyStaticLike<H extends HLike<H>> {
    new (ctx: ContextLike<H>): StrategyLike;
}
