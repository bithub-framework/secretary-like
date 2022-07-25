"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Action = exports.Side = exports.Length = void 0;
var Length;
(function (Length) {
    Length.LONG = 1;
    Length.SHORT = -1;
    function from(side, action) {
        return side * action;
    }
    Length.from = from;
})(Length = exports.Length || (exports.Length = {}));
var Side;
(function (Side) {
    Side.BID = 1;
    Side.ASK = -1;
    function from(length, action) {
        return length * action;
    }
    Side.from = from;
})(Side = exports.Side || (exports.Side = {}));
var Action;
(function (Action) {
    Action.OPEN = 1;
    Action.CLOSE = -1;
    function from(length, side) {
        return length * side;
    }
    Action.from = from;
})(Action = exports.Action || (exports.Action = {}));
//# sourceMappingURL=length-action-side.js.map