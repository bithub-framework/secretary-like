export enum Length {
	LONG = 'LONG',
	SHORT = 'SHORT',
}
export namespace Length {
	export function from(side: Side, action: Action): Length {
		if (side === Side.BID && action === Action.OPEN) return Length.LONG;
		if (side === Side.ASK && action === Action.CLOSE) return Length.LONG;
		return Length.SHORT;
	}
	export function invert(length: Length): Length {
		if (length === Length.LONG) return Length.SHORT;
		else return Length.LONG;
	}
}


export enum Side {
	BID = 'BID',
	ASK = 'ASK',
}
export namespace Side {
	export function from(length: Length, action: Action): Side {
		if (length === Length.LONG && action === Action.OPEN) return Side.BID;
		if (length === Length.SHORT && action === Action.CLOSE) return Side.BID;
		return Side.ASK;
	}
	export function invert(side: Side): Side {
		if (side === Side.BID) return Side.ASK;
		else return Side.BID;
	}
}


export enum Action {
	OPEN = 'OPEN',
	CLOSE = 'CLOSE',
}
export namespace Action {
	export function from(length: Length, side: Side): Action {
		if (length === Length.LONG && side === Side.BID) return Action.OPEN;
		if (length === Length.SHORT && side === Side.ASK) return Action.OPEN;
		return Action.CLOSE;
	}
	export function invert(action: Action): Action {
		if (action === Action.OPEN) return Action.CLOSE;
		else return Action.OPEN;
	}
}
