export function Side(x, y) {
    if (y === undefined && x === Side.ASK)
        return Side.BID;
    if (x === Operation.OPEN && y === Length.LONG)
        return Side.BID;
    if (x === Operation.CLOSE && y === Length.SHORT)
        return Side.BID;
    if (y === Operation.OPEN && x === Length.LONG)
        return Side.BID;
    if (y === Operation.CLOSE && x === Length.SHORT)
        return Side.BID;
    return Side.ASK;
}
(function (Side) {
    Side.BID = 'BID';
    Side.ASK = 'ASK';
})(Side || (Side = {}));
export function Operation(x, y) {
    if (y === undefined && x === Operation.CLOSE)
        return Operation.OPEN;
    if (x === Side.BID && y === Length.LONG)
        return Operation.OPEN;
    if (x === Side.ASK && y === Length.SHORT)
        return Operation.OPEN;
    if (y === Side.BID && x === Length.LONG)
        return Operation.OPEN;
    if (y === Side.ASK && x === Length.SHORT)
        return Operation.OPEN;
    return Operation.CLOSE;
}
(function (Operation) {
    Operation.OPEN = 'OPEN';
    Operation.CLOSE = 'CLOSE';
})(Operation || (Operation = {}));
export function Length(x, y) {
    if (y === undefined && x === Length.SHORT)
        return Length.LONG;
    if (x === Side.BID && y === Operation.OPEN)
        return Length.LONG;
    if (x === Side.ASK && y === Operation.CLOSE)
        return Length.LONG;
    if (y === Side.BID && x === Operation.OPEN)
        return Length.LONG;
    if (y === Side.ASK && x === Operation.CLOSE)
        return Length.LONG;
    return Length.SHORT;
}
(function (Length) {
    Length.LONG = 'LONG';
    Length.SHORT = 'SHORT';
})(Length || (Length = {}));
//# sourceMappingURL=data.js.map