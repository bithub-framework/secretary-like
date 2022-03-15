import { HLike, HStatic } from '../secretaries/h';
import { Positions, PositionsStatic } from '../secretaries/positions';
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

	private readonly Position: ConcretePositionStatic<ConcreteH>;
	private readonly Closable: ConcreteClosableStatic<ConcreteH>;

	public constructor(
		private readonly H: HStatic<ConcreteH>,
	) {
		this.Position = new ConcretePositionStatic(this.H);
		this.Closable = new ConcreteClosableStatic(this.H);
	}

	public capture(positions: ConcretePositions<ConcreteH>): Positions.Snapshot {
		return {
			position: this.Position.capture(positions.position),
			closable: this.Closable.capture(positions.closable),
			time: positions.time,
		};
	}

	public restore(snapshot: Positions.Snapshot): ConcretePositions.MutablePlain<ConcreteH> {
		return {
			position: this.Position.restore(snapshot.position),
			closable: this.Closable.restore(snapshot.closable),
			time: snapshot.time,
		}
	}
}
