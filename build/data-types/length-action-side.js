"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Action = exports.Side = exports.Length = void 0;
var Length;
(function (Length) {
    Length.LONG = 0;
    Length.SHORT = 1;
    function from(side, action) {
        return side ^ action;
    }
    Length.from = from;
    function invert(length) {
        return length ^ 1;
    }
    Length.invert = invert;
})(Length = exports.Length || (exports.Length = {}));
var Side;
(function (Side) {
    Side.BID = 0;
    Side.ASK = 1;
    function from(length, action) {
        return length ^ action;
    }
    Side.from = from;
    function invert(side) {
        return side ^ 1;
    }
    Side.invert = invert;
})(Side = exports.Side || (exports.Side = {}));
var Action;
(function (Action) {
    Action.OPEN = 0;
    Action.CLOSE = 1;
    function from(length, side) {
        return length ^ side;
    }
    Action.from = from;
    function invert(action) {
        return action ^ 1;
    }
    Action.invert = invert;
})(Action = exports.Action || (exports.Action = {}));
//# sourceMappingURL=length-action-side.js.map