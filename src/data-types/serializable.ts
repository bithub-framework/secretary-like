export interface SerializableStatic
	<
	Source,
	Data,
	Snapshot
	> {
	create: (source: Source) => Data;
	capture: (data: Data) => Snapshot;
	restore: (snapshot: Snapshot) => Data;
}
