import { HLike, H, HStatic } from './h';
import { Length } from './length-action-side';


export class Position<H extends HLike<H>> {
	public constructor(
		private long: H,
		private short: H,
	) { }

	public byLength(length: Length): H {
		return length === Length.LONG
			? this.long
			: this.short;
	}
}

export namespace Position {
	export interface Snapshot {
		readonly long: H.Snapshot;
		readonly short: H.Snapshot;
	}
}


export class PositionStatic<H extends HLike<H>> {
	public constructor(
		private H: HStatic<H>,
	) { }

	public capture(position: Position<H>): Position.Snapshot {
		return {
			long: this.H.capture(position.byLength(Length.LONG)),
			short: this.H.capture(position.byLength(Length.SHORT)),
		};
	}

	public restore(snapshot: Position.Snapshot): Position<H> {
		return new Position(
			this.H.restore(snapshot.long),
			this.H.restore(snapshot.short),
		);
	}

	public copy(position: Position<H>): Position<H> {
		return new Position(
			position.byLength(Length.LONG),
			position.byLength(Length.SHORT),
		);
	}
}
