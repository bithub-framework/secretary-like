import { HLike, H } from './h';
import { Length } from './length';


export interface Position<
	ConcreteH extends HLike<ConcreteH>,
	> {
	readonly [length: Length]: ConcreteH;
}
export namespace Position {
	export interface MutablePlain<
		ConcreteH extends HLike<ConcreteH>,
		> {
		[length: Length]: ConcreteH;
	}
	export interface Snapshot {
		readonly [length: Length]: H.Snapshot;
	}
}
export interface PositionStatic<
	ConcreteH extends HLike<ConcreteH>,
	> {
	capture(position: Position<ConcreteH>): Position.Snapshot;
	restore(snapshot: Position.Snapshot): Position.MutablePlain<ConcreteH>;
}
