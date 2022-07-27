import { HLike, H, HFactory } from './h';
import { Length } from './length-action-side';
import { LengthPair } from './pair';


export class Position<H extends HLike<H>> extends LengthPair<H> { }

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
			long: this.hFactory.capture(position.get(Length.LONG)),
			short: this.hFactory.capture(position.get(Length.SHORT)),
		};
	}

	public restore(snapshot: Position.Snapshot): Position<H> {
		return new Position(
			this.hFactory.restore(snapshot.long),
			this.hFactory.restore(snapshot.short),
		);
	}

	public copy(position: Position<H>): Position<H> {
		return new Position(
			position.get(Length.LONG),
			position.get(Length.SHORT),
		);
	}
}
