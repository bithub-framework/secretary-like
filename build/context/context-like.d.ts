import { HLike, DataStaticNamespace } from '../data-types';
import { TimelineLike } from '../timeline-like';
import { DaemonLike } from 'startable';
import { MarketApiLike } from './market-api';
import { AccountApiLike } from './account-api';
export interface ContextLike<H extends HLike<H>> extends DaemonLike {
    readonly [marketIndex: number]: MarketLike<H>;
    readonly timeline: TimelineLike;
    submit(content: string): void;
    DataStatic: DataStaticNamespace<H>;
}
export interface MarketLike<H extends HLike<H>> extends MarketApiLike<H> {
    readonly [accountIndex: number]: AccountLike<H>;
}
export interface AccountLike<H extends HLike<H>> extends AccountApiLike<H> {
}
