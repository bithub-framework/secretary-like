import { HLike, HStatic } from './h';
import { Position, PositionStatic } from './position';
import { Closable, ClosableStatic } from './closable';



export interface Positions<H extends HLike<H>> {
	position: Position<H>;
	closable: Closable<H>;
	time: number;
}

export namespace Positions {
	export interface Snapshot {
		readonly position: Position.Snapshot;
		readonly closable: Closable.Snapshot;
		readonly time: number;
	}
}


export class PositionsStatic<H extends HLike<H>>{
	private readonly Position = new PositionStatic(this.H);
	private readonly Closable = new ClosableStatic(this.H);

	public constructor(
		private readonly H: HStatic<H>,
	) { }

	public capture(positions: Positions<H>): Positions.Snapshot {
		return {
			position: this.Position.capture(positions.position),
			closable: this.Closable.capture(positions.closable),
			time: positions.time,
		};
	}

	public restore(snapshot: Positions.Snapshot): Positions<H> {
		return {
			position: this.Position.restore(snapshot.position),
			closable: this.Closable.restore(snapshot.closable),
			time: snapshot.time,
		}
	}

	public copy(positions: Positions<H>): Positions<H> {
		return {
			position: this.Position.copy(positions.position),
			closable: this.Position.copy(positions.closable),
			time: positions.time,
		};
	}
}