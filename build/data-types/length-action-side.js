"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CLOSE = exports.OPEN = exports.Action = exports.ASK = exports.BID = exports.Side = exports.SHORT = exports.LONG = exports.Length = void 0;
var Length;
(function (Length) {
    Length[Length["LONG"] = 0] = "LONG";
    Length[Length["SHORT"] = 1] = "SHORT";
})(Length = exports.Length || (exports.Length = {}));
exports.LONG = Length.LONG;
exports.SHORT = Length.SHORT;
(function (Length) {
    function from(side, action) {
        if (side === exports.BID && action === exports.OPEN)
            return exports.LONG;
        if (side === exports.ASK && action === exports.CLOSE)
            return exports.LONG;
        return exports.SHORT;
    }
    Length.from = from;
    function invert(length) {
        return length === exports.LONG ? exports.SHORT : exports.LONG;
    }
    Length.invert = invert;
})(Length = exports.Length || (exports.Length = {}));
var Side;
(function (Side) {
    Side[Side["BID"] = 0] = "BID";
    Side[Side["ASK"] = 1] = "ASK";
})(Side = exports.Side || (exports.Side = {}));
exports.BID = Side.BID;
exports.ASK = Side.ASK;
(function (Side) {
    function from(length, action) {
        return Length.from(exports.BID, action) === length ? exports.BID : exports.ASK;
    }
    Side.from = from;
    function invert(side) {
        return side === exports.BID ? exports.ASK : exports.BID;
    }
    Side.invert = invert;
})(Side = exports.Side || (exports.Side = {}));
var Action;
(function (Action) {
    Action[Action["OPEN"] = 0] = "OPEN";
    Action[Action["CLOSE"] = 1] = "CLOSE";
})(Action = exports.Action || (exports.Action = {}));
exports.OPEN = Action.OPEN;
exports.CLOSE = Action.CLOSE;
(function (Action) {
    function from(length, side) {
        return Length.from(side, exports.OPEN) === length ? exports.OPEN : exports.CLOSE;
    }
    Action.from = from;
    function invert(action) {
        return action === exports.OPEN ? exports.CLOSE : exports.OPEN;
    }
    Action.invert = invert;
})(Action = exports.Action || (exports.Action = {}));
//# sourceMappingURL=length-action-side.js.map