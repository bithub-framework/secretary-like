import { HLike, HStatic } from '../context/h';
import { Positions, PositionsStatic } from '../context/positions';
import { ConcretePositionStatic } from './concrete-position';
import { ConcreteClosableStatic } from './concrete-closable';



export interface ConcretePositions<
	ConcreteH extends HLike<ConcreteH>,
	> extends Positions<ConcreteH> { }


export namespace ConcretePositions {
	export interface MutablePlain<
		ConcreteH extends HLike<ConcreteH>,
		> extends Positions.MutablePlain<ConcreteH> { }
}


export class ConcretePositionsStatic<
	ConcreteH extends HLike<ConcreteH>,
	> implements PositionsStatic<
	ConcreteH
	>{
	public constructor(
		private Position: ConcretePositionStatic<ConcreteH>,
		private Closable: ConcreteClosableStatic<ConcreteH>,
	) { }

	capture(positions: ConcretePositions<ConcreteH>): Positions.Snapshot {
		return {
			position: this.Position.capture(positions.position),
			closable: this.Closable.capture(positions.closable),
			time: positions.time,
		};
	}
	restore(snapshot: Positions.Snapshot): ConcretePositions.MutablePlain<ConcreteH> {
		return {
			position: this.Position.restore(snapshot.position),
			closable: this.Closable.restore(snapshot.closable),
			time: snapshot.time,
		}
	}
}
