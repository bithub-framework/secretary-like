export interface Timeline {
    sleep(ms: number): Promise<void>;
    now(): number;
    escape<T>(p: Promise<T>): Promise<T>;
}
