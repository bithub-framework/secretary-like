import { HLike, H, HFactory } from './h';
import { OpenOrder, OpenOrderFactory } from './open-order';



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

export class AmendmentFactory<H extends HLike<H>> {
	public constructor(
		private hFactory: HFactory<H>,
		private openOrderFactory: OpenOrderFactory<H>,
	) { }

	public capture(amendment: Amendment<H>): Amendment.Snapshot {
		return {
			...this.openOrderFactory.capture(amendment),
			newUnfilled: this.hFactory.capture(amendment.newUnfilled),
			newPrice: this.hFactory.capture(amendment.newPrice),
		}
	}

	public restore(snapshot: Amendment.Snapshot): Amendment<H> {
		return {
			...this.openOrderFactory.restore(snapshot),
			newUnfilled: this.hFactory.restore(snapshot.newUnfilled),
			newPrice: this.hFactory.restore(snapshot.newPrice),
		};
	}

	public copy(amendment: Amendment<H>): Amendment<H> {
		return {
			...this.openOrderFactory.copy(amendment),
			newUnfilled: amendment.newUnfilled,
			newPrice: amendment.newPrice,
		};
	}
}
