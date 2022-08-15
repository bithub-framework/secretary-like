export interface CompositeDataLike {
	toJSON(): unknown;
	toString(): string;
}

export interface CompositeDataLikeStatic
	<
	Source,
	Data extends CompositeDataLike,
	Snapshot
	> {
	create: (source: Source) => Data;
	capture: (data: Data) => Snapshot;
	restore: (snapshot: Snapshot) => Data;
}
