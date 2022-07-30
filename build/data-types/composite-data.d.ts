export interface CompositeDataLike {
    toJSON(): unknown;
    toString(): string;
}
export interface CompositeDataFactoryLike<Source, DataLike extends Source, Snapshot> {
    ['new'](source: Source): DataLike;
    capture(data: DataLike): Snapshot;
    restore(snapshot: Snapshot): DataLike;
}
