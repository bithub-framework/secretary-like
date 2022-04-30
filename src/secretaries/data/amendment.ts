import { HLike, H, HStatic } from './h';
import { OpenOrder, OpenOrderStatic } from './open-order';



export interface Amendment<H extends HLike<H>>
	extends OpenOrder<H> {

	newUnfilled: H;
	newPrice: H;
}

export namespace Amendment {
	export interface Snapshot extends OpenOrder.Snapshot {
		readonly newUnfilled: H.Snapshot;
		readonly newPrice: H.Snapshot;
	}
}

export class AmendmentStatic<H extends HLike<H>> {
	private OpenOrder = new OpenOrderStatic<H>(this.H);

	public constructor(
		private H: HStatic<H>,
	) { }

	public capture(amendment: Amendment<H>): Amendment.Snapshot {
		return {
			...this.OpenOrder.capture(amendment),
			newUnfilled: this.H.capture(amendment.newUnfilled),
			newPrice: this.H.capture(amendment.newPrice),
		}
	}

	public restore(snapshot: Amendment.Snapshot): Amendment<H> {
		return {
			...this.OpenOrder.restore(snapshot),
			newUnfilled: this.H.restore(snapshot.newUnfilled),
			newPrice: this.H.restore(snapshot.newPrice),
		};
	}

	public copy(amendment: Amendment<H>): Amendment<H> {
		return {
			...this.OpenOrder.copy(amendment),
			newUnfilled: amendment.newUnfilled,
			newPrice: amendment.newPrice,
		};
	}
}
