"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CLOSE = exports.OPEN = exports.Action = exports.ASK = exports.BID = exports.Side = exports.SHORT = exports.LONG = exports.Length = void 0;
class Length {
    constructor(i) {
        this.i = i;
    }
    static from(side, action) {
        if (side === exports.BID && action === exports.OPEN)
            return exports.LONG;
        if (side === exports.ASK && action === exports.CLOSE)
            return exports.LONG;
        return exports.SHORT;
    }
}
exports.Length = Length;
Length.LONG = new Length(() => Length.SHORT);
Length.SHORT = new Length(() => Length.LONG);
exports.LONG = Length.LONG;
exports.SHORT = Length.SHORT;
class Side {
    constructor(i) {
        this.i = i;
    }
    static from(length, action) {
        return Length.from(exports.BID, action) === length ? exports.BID : exports.ASK;
    }
}
exports.Side = Side;
Side.BID = new Side(() => Side.ASK);
Side.ASK = new Side(() => Side.BID);
exports.BID = Side.BID;
exports.ASK = Side.ASK;
class Action {
    constructor(i) {
        this.i = i;
    }
    static from(length, side) {
        return Length.from(side, exports.OPEN) === length ? exports.OPEN : exports.CLOSE;
    }
}
exports.Action = Action;
Action.OPEN = new Action(() => Action.CLOSE);
Action.CLOSE = new Action(() => Action.OPEN);
exports.OPEN = Action.OPEN;
exports.CLOSE = Action.CLOSE;
//# sourceMappingURL=pairs.js.map