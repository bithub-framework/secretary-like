import { HLike, HFactory } from './h';
import { Position, PositionFactory } from './position';



export interface Positions<H extends HLike<H>> {
	position: Position<H>;
	closable: Position<H>;
	time: number;
}

export namespace Positions {
	export interface Snapshot {
		readonly position: Position.Snapshot;
		readonly closable: Position.Snapshot;
		readonly time: number;
	}
}

export class PositionsFactory<H extends HLike<H>>{
	public constructor(
		private hFactory: HFactory<H>,
		private positionFactory: PositionFactory<H>,
	) { }

	public capture(positions: Positions<H>): Positions.Snapshot {
		return {
			position: this.positionFactory.capture(positions.position),
			closable: this.positionFactory.capture(positions.closable),
			time: positions.time,
		};
	}

	public restore(snapshot: Positions.Snapshot): Positions<H> {
		return {
			position: this.positionFactory.restore(snapshot.position),
			closable: this.positionFactory.restore(snapshot.closable),
			time: snapshot.time,
		}
	}

	public copy(positions: Positions<H>): Positions<H> {
		return {
			position: this.positionFactory.copy(positions.position),
			closable: this.positionFactory.copy(positions.closable),
			time: positions.time,
		};
	}
}
