export interface Timeline {
    readonly sleep: (ms: number) => Promise<void>;
    readonly now: () => number;
    readonly escape: <T>(promise: Promise<T>) => Promise<T>;
}
