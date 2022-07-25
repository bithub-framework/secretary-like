import { HLike, H, HStatic } from './h';
import { Length } from './length-action-side';


export class Position<H extends HLike<H>> {
	public constructor(
		private long: H,
		private short: H,
	) { }

	public get(length: Length): H {
		if (length === Length.LONG) return this.long;
		else return this.short;
	}
	public set(length: Length, position: H): void {
		if (length === Length.LONG) this.long = position;
		else this.short = position;
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
			long: this.H.capture(position.get(Length.LONG)),
			short: this.H.capture(position.get(Length.SHORT)),
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
			position.get(Length.LONG),
			position.get(Length.SHORT),
		);
	}
}
