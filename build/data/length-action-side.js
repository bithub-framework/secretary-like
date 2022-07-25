"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Action = exports.Side = exports.Length = void 0;
var Length;
(function (Length) {
    Length[Length["LONG"] = 0] = "LONG";
    Length[Length["SHORT"] = 1] = "SHORT";
})(Length = exports.Length || (exports.Length = {}));
(function (Length) {
    function from(side, action) {
        if (side === Side.BID && action === Action.OPEN)
            return Length.LONG;
        if (side === Side.ASK && action === Action.CLOSE)
            return Length.LONG;
        return Length.SHORT;
    }
    Length.from = from;
})(Length = exports.Length || (exports.Length = {}));
var Side;
(function (Side) {
    Side[Side["BID"] = 0] = "BID";
    Side[Side["ASK"] = 1] = "ASK";
})(Side = exports.Side || (exports.Side = {}));
(function (Side) {
    function from(length, action) {
        if (length === Length.LONG && action === Action.OPEN)
            return Side.BID;
        if (length === Length.SHORT && action === Action.CLOSE)
            return Side.BID;
        return Side.ASK;
    }
    Side.from = from;
})(Side = exports.Side || (exports.Side = {}));
var Action;
(function (Action) {
    Action[Action["OPEN"] = 0] = "OPEN";
    Action[Action["CLOSE"] = 1] = "CLOSE";
})(Action = exports.Action || (exports.Action = {}));
(function (Action) {
    function from(length, side) {
        if (length === Length.LONG && side === Side.BID)
            return Action.OPEN;
        if (length === Length.SHORT && side === Side.ASK)
            return Action.OPEN;
        return Action.CLOSE;
    }
    Action.from = from;
})(Action = exports.Action || (exports.Action = {}));
//# sourceMappingURL=length-action-side.js.map