import { HLike, HStatic } from '../secretaries/h';
import { Position, PositionStatic } from '../secretaries/position';
import { Length } from '../secretaries/length';



export interface ConcretePosition<
	ConcreteH extends HLike<ConcreteH>,
	> extends Position<ConcreteH> {
}

export namespace ConcretePosition {
	export interface MutablePlain<
		ConcreteH extends HLike<ConcreteH>,
		> extends Position.MutablePlain<ConcreteH> { }
}


export class ConcretePositionStatic<
	ConcreteH extends HLike<ConcreteH>,
	> implements PositionStatic<
	ConcreteH
	>{
	public constructor(
		private ConcreteH: HStatic<ConcreteH>,
	) { }

	capture(position: ConcretePosition<ConcreteH>): Position.Snapshot {
		return {
			[Length.LONG]: this.ConcreteH.capture(position[Length.LONG]),
			[Length.SHORT]: this.ConcreteH.capture(position[Length.SHORT]),
		};
	}

	restore(snapshot: Position.Snapshot): ConcretePosition.MutablePlain<ConcreteH> {
		return {
			[Length.LONG]: this.ConcreteH.restore(snapshot[Length.LONG]),
			[Length.SHORT]: this.ConcreteH.restore(snapshot[Length.SHORT]),
		}
	}
}
