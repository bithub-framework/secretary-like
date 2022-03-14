import { HLike, HStatic } from '../context/h';
import { Closable, ClosableStatic } from '../context/closable';
import { Length } from '../context/length';



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
		private ConcreteH: HStatic<ConcreteH>,
	) { }

	capture(closable: ConcreteClosable<ConcreteH>): Closable.Snapshot {
		return {
			[Length.LONG]: this.ConcreteH.capture(closable[Length.LONG]),
			[Length.SHORT]: this.ConcreteH.capture(closable[Length.SHORT]),
		};
	}
	restore(snapshot: Closable.Snapshot): ConcreteClosable.MutablePlain<ConcreteH> {
		return {
			[Length.LONG]: this.ConcreteH.restore(snapshot[Length.LONG]),
			[Length.SHORT]: this.ConcreteH.restore(snapshot[Length.SHORT]),
		}
	}
}
