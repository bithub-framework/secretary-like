import { HLike, H, HFactory } from './h';
import { Length } from './length-action-side';


export class Position<H extends HLike<H>>  {
	[length: Length]: H;
}

export namespace Position {
	export interface Snapshot {
		readonly long: H.Snapshot;
		readonly short: H.Snapshot;
	}
}

export class PositionFactory<H extends HLike<H>> {
	public constructor(
		private hFactory: HFactory<H>,
	) { }

	public capture(position: Position<H>): Position.Snapshot {
		return {
			long: this.hFactory.capture(position[Length.LONG]),
			short: this.hFactory.capture(position[Length.SHORT]),
		};
	}

	public restore(snapshot: Position.Snapshot): Position<H> {
		return {
			[Length.LONG]: this.hFactory.restore(snapshot.long),
			[Length.SHORT]: this.hFactory.restore(snapshot.short),
		};
	}

	public copy(position: Position<H>): Position<H> {
		return {
			[Length.LONG]: position[Length.LONG],
			[Length.SHORT]: position[Length.SHORT],
		};
	}
}
