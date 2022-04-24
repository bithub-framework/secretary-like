import { HLike, H, HStatic } from './h';
import { Length } from './length';



export interface Closable<H extends HLike<H>> {
	[length: Length]: H;
}

export namespace Closable {
	export interface Snapshot {
		readonly [length: Length]: H.Snapshot;
	}
}


export class ClosableStatic<H extends HLike<H>> {
	public constructor(
		private H: HStatic<H>,
	) { }

	public capture(closable: Closable<H>): Closable.Snapshot {
		return {
			[Length.LONG]: this.H.capture(closable[Length.LONG]),
			[Length.SHORT]: this.H.capture(closable[Length.SHORT]),
		};
	}

	public restore(snapshot: Closable.Snapshot): Closable<H> {
		return {
			[Length.LONG]: this.H.restore(snapshot[Length.LONG]),
			[Length.SHORT]: this.H.restore(snapshot[Length.SHORT]),
		}
	}

	public copy(closable: Closable<H>): Closable<H> {
		return {
			[Length.LONG]: closable[Length.LONG],
			[Length.SHORT]: closable[Length.SHORT],
		}
	}
}
