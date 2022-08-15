export enum Length {
	LONG,
	SHORT,
}
export const LONG = Length.LONG;
export const SHORT = Length.SHORT;
export namespace Length {
	export function from(side: Side, action: Action): Length {
		if (side === BID && action === OPEN) return LONG;
		if (side === ASK && action === CLOSE) return LONG;
		return SHORT;
	}
	export function invert(length: Length): Length {
		return length === LONG ? SHORT : LONG;
	}
}


export enum Side {
	BID,
	ASK,
}
export const BID = Side.BID;
export const ASK = Side.ASK;
export namespace Side {
	export function from(length: Length, action: Action): Side {
		return Length.from(BID, action) === length ? BID : ASK;
	}
	export function invert(side: Side): Side {
		return side === BID ? ASK : BID;
	}
}


export enum Action {
	OPEN,
	CLOSE,
}
export const OPEN = Action.OPEN;
export const CLOSE = Action.CLOSE;
export namespace Action {
	export function from(length: Length, side: Side): Action {
		return Length.from(side, OPEN) === length ? OPEN : CLOSE;
	}
	export function invert(action: Action): Action {
		return action === OPEN ? CLOSE : OPEN;
	}
}
