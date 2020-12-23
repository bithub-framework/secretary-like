export const BID = 1 /* BID */;
export const ASK = -1 /* ASK */;
export const LONG = -1 /* LONG */;
export const SHORT = 1 /* SHORT */;
export function calcLength(open, side) {
    return open === (side === BID) ? LONG : SHORT;
}
//# sourceMappingURL=data.js.map