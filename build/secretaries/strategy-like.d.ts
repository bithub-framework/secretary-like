import { ContextLike } from './context';
import { HLike } from './data/h';
import { Startable } from 'startable';
export interface StrategyLike {
    startable: Startable;
}
export interface StrategyStatic<H extends HLike<H>, OrderId, TradeId> {
    new (ctx: ContextLike<H, OrderId, TradeId>): StrategyLike;
}
