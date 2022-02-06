// export interface Timeline<TimeoutId> {
export interface Timeline {
    sleep: (ms: number) => Promise<void>;
    // setTimeout: (cb: () => void, ms: number) => TimeoutId,
    // clearTimeout: (timerId: TimeoutId) => void,
    now: () => number;
    escape: <T>(promise: Promise<T>) => Promise<T>;
}
