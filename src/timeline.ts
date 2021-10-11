export interface Timeline<TimeoutId> {
    sleep: (ms: number) => Promise<void>;
    setTimeout: (cb: () => void, ms: number) => TimeoutId,
    clearTimeout: (timerId: TimeoutId) => void,
    now: () => number;
    escape: <T>(promise: Promise<T>) => Promise<T>;
}
