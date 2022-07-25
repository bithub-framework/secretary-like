import { HLike, H, HStatic } from './h';
import { Length } from './length-action-side';



export class Closable<H extends HLike<H>> {
	public constructor(
		private long: H,
		private short: H,
	) { }

	public get(length: Length): H {
		if (length === Length.LONG) return this.long;
		else return this.short;
	}
	public set(length: Length, position: H): void {
		if (length === Length.LONG) this.long = position;
		else this.short = position;
	}
}

export namespace Closable {
	export interface Snapshot {
		readonly long: H.Snapshot;
		readonly short: H.Snapshot;
	}
}


export class ClosableStatic<H extends HLike<H>> {
	public constructor(
		private H: HStatic<H>,
	) { }

	public capture(closable: Closable<H>): Closable.Snapshot {
		return {
			long: this.H.capture(closable.get(Length.LONG)),
			short: this.H.capture(closable.get(Length.SHORT)),
		};
	}

	public restore(snapshot: Closable.Snapshot): Closable<H> {
		return new Closable(
			this.H.restore(snapshot.long),
			this.H.restore(snapshot.short),
		);
	}

	public copy(closable: Closable<H>): Closable<H> {
		return new Closable(
			closable.get(Length.LONG),
			closable.get(Length.SHORT),
		);
	}
}
