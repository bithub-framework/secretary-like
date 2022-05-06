import { Startable } from 'startable';
import { StrategyStatic } from './strategy-like';
import { HLike } from './data/h';
export interface SecretaryLike {
    startable: Startable;
}
export interface SecretaryStatic<H extends HLike<H>> {
    new (Strategy: StrategyStatic<H>): SecretaryLike;
}
