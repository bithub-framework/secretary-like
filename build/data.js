"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpenMaker = exports.Length = exports.Operation = exports.Side = void 0;
var Side;
(function (Side) {
    Side.BID = 1;
    Side.ASK = -1;
})(Side = exports.Side || (exports.Side = {}));
var Operation;
(function (Operation) {
    Operation.OPEN = 1;
    Operation.CLOSE = -1;
})(Operation = exports.Operation || (exports.Operation = {}));
var Length;
(function (Length) {
    Length.LONG = 1;
    Length.SHORT = -1;
})(Length = exports.Length || (exports.Length = {}));
var OpenMaker;
(function (OpenMaker) {
    function jsonCompatiblize(order) {
        return {
            price: order.price.toString(),
            quantity: order.quantity.toString(),
            side: order.side,
            length: order.length,
            operation: order.operation,
            filled: order.filled.toString(),
            unfilled: order.unfilled.toString(),
            id: order.id,
            behind: order.behind.toString(),
        };
    }
    OpenMaker.jsonCompatiblize = jsonCompatiblize;
})(OpenMaker = exports.OpenMaker || (exports.OpenMaker = {}));
//# sourceMappingURL=data.js.map