import { HLike, H } from './h';
import { Length } from './length';


export interface Closable<
	ConcreteH extends HLike<ConcreteH>,
	> {
	readonly [length: Length]: ConcreteH;
}

export namespace Closable {
	export interface MutablePlain<
		ConcreteH extends HLike<ConcreteH>,
		> {
		[length: Length]: ConcreteH;
	}

	export interface Snapshot {
		readonly [length: Length]: H.Snapshot;
	}
}

export interface ClosableStatic<
	ConcreteH extends HLike<ConcreteH>,
	> {
	capture(closable: Closable<ConcreteH>): Closable.Snapshot;
	restore(snapshot: Closable.Snapshot): Closable.MutablePlain<ConcreteH>;
}
