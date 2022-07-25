import { HLike, H } from './h';
import { Position } from './position';



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

	export class Static<H extends HLike<H>>{
		private Position = new Position.Static(this.H);

		public constructor(
			private H: H.Static<H>,
		) { }

		public capture(positions: Positions<H>): Positions.Snapshot {
			return {
				position: this.Position.capture(positions.position),
				closable: this.Position.capture(positions.closable),
				time: positions.time,
			};
		}

		public restore(snapshot: Positions.Snapshot): Positions<H> {
			return {
				position: this.Position.restore(snapshot.position),
				closable: this.Position.restore(snapshot.closable),
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

}
