import Big from 'big.js';
// TODO peer


export interface HLike<ConcreteH extends HLike<ConcreteH>> {
	plus(x: ConcreteH): ConcreteH;
	minus(x: ConcreteH): ConcreteH;
	times(x: ConcreteH): ConcreteH;
	div(x: ConcreteH): ConcreteH;
}
export namespace H {
	export type Snapshot = string;
	export type Source = number | string;
}


export interface HStatic<ConcreteH extends HLike<ConcreteH>> {
	from(source: H.Source): ConcreteH;
	capture(x: ConcreteH): H.Snapshot;
	restore(s: H.Snapshot): ConcreteH;
}
