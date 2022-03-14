import Big from 'big.js';
import { H, HStatic, HFriendly } from './h';


export class ConcreteH extends HFriendly {
	private readonly value: Big;

	public constructor(big: Big) {
		super();
		this.value = big;
	}

	public plus(x: this): H {
		return new ConcreteH(this.value.plus(x.value));
	}

	public minus(x: this): H {
		return new ConcreteH(this.value.minus(x.value));
	}

	public times(x: this): H {
		return new ConcreteH(this.value.times(x.value));
	}

	public div(x: this): H {
		return new ConcreteH(this.value.div(x.value));
	}

	public capture(): H.Snapshot {
		return this.value.toString();
	}
}

export class ConcreteHStatic implements HStatic<ConcreteH> {
	from(source: H.Snapshot): ConcreteH {
		return new ConcreteH(new Big(source));
	}
	capture(x: ConcreteH): H.Snapshot {
		return x.capture();
	}
	restore(s: H.Snapshot): ConcreteH {
		return new ConcreteH(new Big(s));
	}
}

const H: HStatic<ConcreteH> = new ConcreteHStatic();

export { H };
