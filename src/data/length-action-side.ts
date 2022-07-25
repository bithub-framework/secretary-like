export enum Length {
	LONG,
	SHORT,
}
export namespace Length {
	export function from(side: Side, action: Action): Length {
		if (side === Side.BID && action === Action.OPEN) return Length.LONG;
		if (side === Side.ASK && action === Action.CLOSE) return Length.LONG;
		return Length.SHORT;
	}
}


export enum Side {
	BID,
	ASK,
}
export namespace Side {
	export function from(length: Length, action: Action): Side {
		if (length === Length.LONG && action === Action.OPEN) return Side.BID;
		if (length === Length.SHORT && action === Action.CLOSE) return Side.BID;
		return Side.ASK;
	}
}


export enum Action {
	OPEN,
	CLOSE,
}
export namespace Action {
	export function from(length: Length, side: Side): Action {
		if (length === Length.LONG && side === Side.BID) return Action.OPEN;
		if (length === Length.SHORT && side === Side.ASK) return Action.OPEN;
		return Action.CLOSE;
	}
}
