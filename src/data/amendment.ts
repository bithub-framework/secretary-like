import { HLike, H, HStatic } from './h';
import { OpenOrder, OpenOrderStatic } from './open-order';



export interface Amendment<H extends HLike<H>> extends OpenOrder<H> {
	newUnfilled: H;
	newPrice: H;
}

export namespace Amendment {
	export interface Snapshot extends OpenOrder.Snapshot {
		readonly newUnfilled: H.Snapshot;
		readonly newPrice: H.Snapshot;
	}
}

export class AmendmentStatic<H extends HLike<H>> extends OpenOrderStatic<H>{
	public captureAmendment(amendment: Amendment<H>): Amendment.Snapshot {
		return {
			...this.captureOpenOrder(amendment),
			newUnfilled: this.H.capture(amendment.newUnfilled),
			newPrice: this.H.capture(amendment.newPrice),
		}
	}

	public restoreAmendment(snapshot: Amendment.Snapshot): Amendment<H> {
		return {
			...this.restoreOpenOrder(snapshot),
			newUnfilled: this.H.restore(snapshot.newUnfilled),
			newPrice: this.H.restore(snapshot.newPrice),
		};
	}

	public copyAmendment(amendment: Amendment<H>): Amendment<H> {
		return {
			...this.copyOpenOrder(amendment),
			newUnfilled: amendment.newUnfilled,
			newPrice: amendment.newPrice,
		};
	}
}
