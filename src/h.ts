export interface H {
	plus(x: this): H;
	minus(x: this): H;
	times(x: this): H;
	div(x: this): H;
}
export namespace H {
	export type Snapshot = string;
	export type Source = number | string;
}

export abstract class HFriendly implements H {
	public abstract plus(x: this): H;
	public abstract minus(x: this): H;
	public abstract times(x: this): H;
	public abstract div(x: this): H;
}

export interface HStatic<ConcreteH extends HFriendly> {
	from(source: H.Source): ConcreteH;
	capture(x: ConcreteH): H.Snapshot;
	restore(s: H.Snapshot): ConcreteH;
}
