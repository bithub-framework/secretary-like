import { Cancellable } from 'cancellable';
import { TimeEngineLike } from 'time-engine-like';
export interface TimelineLike extends TimeEngineLike {
    sleep(ms: number): Cancellable;
    now(): number;
    escape<T>(p: PromiseLike<T>): Promise<T>;
}
