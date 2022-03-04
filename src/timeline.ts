export interface Timeline {
    readonly sleep: (ms: number) => Promise<void>;
    // setTimeout: (cb: () => void, ms: number) => TimeoutId,
    // clearTimeout: (timerId: TimeoutId) => void,
    readonly now: () => number;
    readonly escape: <T>(promise: Promise<T>) => Promise<T>;
}
