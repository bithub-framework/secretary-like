import { TimeEngineLike } from 'time-engine-like';


export abstract class TimelineLike extends TimeEngineLike {
	public abstract escape<T>(p: PromiseLike<T>): Promise<T>;
}
