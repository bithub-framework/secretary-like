import { Cancellable } from 'cancellable';
export interface TimelineLike {
    sleep(ms: number): Cancellable;
    now(): number;
    escape<T>(p: PromiseLike<T>): Promise<T>;
}
