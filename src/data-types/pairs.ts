export class Length {
	private constructor(
		public readonly i: () => Length,
	) { }

	public static readonly LONG: Length = new Length(() => Length.SHORT);
	public static readonly SHORT: Length = new Length(() => Length.LONG);

	public static from(side: Side, action: Action): Length {
		if (side === BID && action === OPEN) return LONG;
		if (side === ASK && action === CLOSE) return LONG;
		return SHORT;
	}
}
export const LONG = Length.LONG;
export const SHORT = Length.SHORT;



export class Side {
	private constructor(
		public readonly i: () => Side,
	) { }

	public static readonly BID: Side = new Side(() => Side.ASK);
	public static readonly ASK: Side = new Side(() => Side.BID);

	public static from(length: Length, action: Action): Side {
		return Length.from(BID, action) === length ? BID : ASK;
	}
}
export const BID = Side.BID;
export const ASK = Side.ASK;



export class Action {
	private constructor(
		public readonly i: () => Action,
	) { }

	public static readonly OPEN: Action = new Action(() => Action.CLOSE);
	public static readonly CLOSE: Action = new Action(() => Action.OPEN);

	public static from(length: Length, side: Side): Action {
		return Length.from(side, OPEN) === length ? OPEN : CLOSE;
	}
}
export const OPEN = Action.OPEN;
export const CLOSE = Action.CLOSE;
