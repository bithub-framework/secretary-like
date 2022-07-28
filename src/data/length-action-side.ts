export type Length = number;
export namespace Length {
	export const LONG: Length = 0;
	export const SHORT: Length = 1;
	export function from(side: Side, action: Action): Length {
		return side ^ action;
	}
	export function invert(length: Length): Length {
		return length ^ 1;
	}
}


export type Side = number;
export namespace Side {
	export const BID: Side = 0;
	export const ASK: Side = 1;
	export function from(length: Length, action: Action): Side {
		return length ^ action;
	}
	export function invert(side: Side): Side {
		return side ^ 1;
	}
}


export type Action = number;
export namespace Action {
	export const OPEN: Action = 0;
	export const CLOSE: Action = 1;
	export function from(length: Length, side: Side): Action {
		return length ^ side;
	}
	export function invert(action: Action): Action {
		return action ^ 1;
	}
}
