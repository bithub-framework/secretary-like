import { HLike, H, HStatic } from './h';
import { Length } from './length';


export interface Position<H extends HLike<H>> {
	[length: Length]: H;
}

export namespace Position {
	export interface Snapshot {
		readonly [length: Length]: H.Snapshot;
	}
}


export class PositionStatic<H extends HLike<H>> {
	public constructor(
		private H: HStatic<H>,
	) { }

	public capture(position: Position<H>): Position.Snapshot {
		return {
			[Length.LONG]: this.H.capture(position[Length.LONG]),
			[Length.SHORT]: this.H.capture(position[Length.SHORT]),
		};
	}

	public restore(snapshot: Position.Snapshot): Position<H> {
		return {
			[Length.LONG]: this.H.restore(snapshot[Length.LONG]),
			[Length.SHORT]: this.H.restore(snapshot[Length.SHORT]),
		}
	}

	public copy(position: Position<H>): Position<H> {
		return {
			[Length.LONG]: position[Length.LONG],
			[Length.SHORT]: position[Length.SHORT],
		};
	}
}
