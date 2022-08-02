import { TimeEngineLike } from 'time-engine-like';
export declare abstract class TimelineLike extends TimeEngineLike {
    abstract escape<T>(p: PromiseLike<T>): Promise<T>;
}
