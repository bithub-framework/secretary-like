export interface CompositeDataLike {
	toJSON(): unknown;
	toString(): string;
}

export interface CompositeDataFactoryLike<
	Source,
	DataLike extends Source,
	Snapshot> {
	create(source: Source): DataLike;
	capture(data: DataLike): Snapshot;
	restore(snapshot: Snapshot): DataLike;
}
