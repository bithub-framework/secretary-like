import { HLike, H, HStatic } from './secretaries/h';
import Big from 'big.js';


export class ConcreteH implements HLike<ConcreteH> {
	private readonly value: Big;

	private constructor(big: Big) {
		this.value = big;
	}

	public plus(x: ConcreteH): ConcreteH {
		return new ConcreteH(this.value.plus(x.value));
	}

	public minus(x: ConcreteH): ConcreteH {
		return new ConcreteH(this.value.minus(x.value));
	}

	public times(x: ConcreteH): ConcreteH {
		return new ConcreteH(this.value.times(x.value));
	}

	public div(x: ConcreteH): ConcreteH {
		return new ConcreteH(this.value.div(x.value));
	}

	private capture(): H.Snapshot {
		return this.value.toString();
	}

	public static from(source: H.Snapshot): ConcreteH {
		return new ConcreteH(new Big(source));
	}

	public static capture(x: ConcreteH): H.Snapshot {
		return x.capture();
	}
	public static restore(s: H.Snapshot): ConcreteH {
		return new ConcreteH(new Big(s));
	}
}

const hStatic: HStatic<ConcreteH> = ConcreteH;
