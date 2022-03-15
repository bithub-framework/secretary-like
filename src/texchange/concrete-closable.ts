import { HLike, HStatic } from '../secretaries/h';
import { Closable, ClosableStatic } from '../secretaries/closable';
import { Length } from '../secretaries/length';



export interface ConcreteClosable<
	ConcreteH extends HLike<ConcreteH>,
	> extends
	Closable<ConcreteH> {
}

export namespace ConcreteClosable {
	export interface MutablePlain<
		ConcreteH extends HLike<ConcreteH>,
		> extends Closable.MutablePlain<ConcreteH> {
	}
}


export class ConcreteClosableStatic<
	ConcreteH extends HLike<ConcreteH>,
	> implements ClosableStatic<
	ConcreteH
	>{
	public constructor(
		private readonly H: HStatic<ConcreteH>,
	) { }

	capture(closable: ConcreteClosable<ConcreteH>): Closable.Snapshot {
		return {
			[Length.LONG]: this.H.capture(closable[Length.LONG]),
			[Length.SHORT]: this.H.capture(closable[Length.SHORT]),
		};
	}
	restore(snapshot: Closable.Snapshot): ConcreteClosable.MutablePlain<ConcreteH> {
		return {
			[Length.LONG]: this.H.restore(snapshot[Length.LONG]),
			[Length.SHORT]: this.H.restore(snapshot[Length.SHORT]),
		}
	}
}
