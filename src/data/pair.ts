import {
	Length,
	Side,
	Action,
} from './length-action-side';


export interface Pair<Key, Value> {
	get(key: Key): Value;
	set(key: Key, value: Value): void;
}

export class LengthPair<Value> implements Pair<Length, Value> {
	public constructor(
		protected long: Value,
		protected short: Value,
	) { }

	public get(length: Length): Value {
		if (length === Length.LONG) return this.long;
		else return this.short;
	}

	public set(length: Length, value: Value): void {
		if (length === Length.LONG) this.long = value;
		else this.short = value;
	}
}

export class SidePair<Value> implements Pair<Side, Value> {
	public constructor(
		protected bid: Value,
		protected ask: Value,
	) { }

	public get(side: Side): Value {
		if (side === Side.BID) return this.bid;
		else return this.ask;
	}

	public set(side: Side, value: Value): void {
		if (side === Side.BID) this.bid = value;
		else this.ask = value;
	}
}

export class ActionPair<Value> implements Pair<Action, Value> {
	public constructor(
		protected open: Value,
		protected close: Value,
	) { }

	public get(action: Action): Value {
		if (action === Action.OPEN) return this.open;
		else return this.close;
	}

	public set(action: Action, value: Value): void {
		if (action === Action.OPEN) this.open = value;
		else this.close = value;
	}
}
