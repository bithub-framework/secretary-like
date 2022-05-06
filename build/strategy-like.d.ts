import { ContextLike } from './context';
import { HLike } from './data/h';
import { Startable } from 'startable';
export interface StrategyLike {
    startable: Startable;
}
export interface StrategyStatic<H extends HLike<H>> {
    new (ctx: ContextLike<H>): StrategyLike;
}
