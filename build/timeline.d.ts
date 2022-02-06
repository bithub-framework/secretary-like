export interface Timeline {
    sleep: (ms: number) => Promise<void>;
    now: () => number;
    escape: <T>(promise: Promise<T>) => Promise<T>;
}
