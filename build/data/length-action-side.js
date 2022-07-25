"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Action = exports.Side = exports.Length = void 0;
var Length;
(function (Length) {
    Length[Length["LONG"] = 1] = "LONG";
    Length[Length["SHORT"] = -1] = "SHORT";
})(Length = exports.Length || (exports.Length = {}));
(function (Length) {
    function from(side, action) {
        return side * action;
    }
    Length.from = from;
})(Length = exports.Length || (exports.Length = {}));
var Side;
(function (Side) {
    Side[Side["BID"] = 1] = "BID";
    Side[Side["ASK"] = -1] = "ASK";
})(Side = exports.Side || (exports.Side = {}));
(function (Side) {
    function from(length, action) {
        return length * action;
    }
    Side.from = from;
})(Side = exports.Side || (exports.Side = {}));
var Action;
(function (Action) {
    Action[Action["OPEN"] = 1] = "OPEN";
    Action[Action["CLOSE"] = -1] = "CLOSE";
})(Action = exports.Action || (exports.Action = {}));
(function (Action) {
    function from(length, side) {
        return length * side;
    }
    Action.from = from;
})(Action = exports.Action || (exports.Action = {}));
//# sourceMappingURL=length-action-side.js.map