export type Length = number;
export namespace Length {
	export const LONG: Length = 1;
	export const SHORT: Length = -1;

	export function from(side: Side, action: Action): Length {
		return side * action;
	}
}


export type Side = number;
export namespace Side {
	export const BID: Side = 1;
	export const ASK: Side = -1;

	export function from(length: Length, action: Action): Side {
		return length * action;
	}
}


export type Action = number;
export namespace Action {
	export const OPEN: Action = 1;
	export const CLOSE: Action = -1;

	export function from(length: Length, side: Side): Action {
		return length * side;
	}
}
