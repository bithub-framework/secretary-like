import { DaemonLike } from 'startable';
import { SecontextLike } from './secontext/context-like';
import { HLike } from './imported-data-types';
export interface StrategyLike extends DaemonLike {
}
export interface StrategyLikeStatic<H extends HLike<H>> {
    new (sectx: SecontextLike<H>): StrategyLike;
}
