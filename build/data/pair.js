"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActionPair = exports.SidePair = exports.LengthPair = void 0;
const length_action_side_1 = require("./length-action-side");
class LengthPair {
    constructor(long, short) {
        this.long = long;
        this.short = short;
    }
    get(length) {
        if (length === length_action_side_1.Length.LONG)
            return this.long;
        else
            return this.short;
    }
    set(length, value) {
        if (length === length_action_side_1.Length.LONG)
            this.long = value;
        else
            this.short = value;
    }
}
exports.LengthPair = LengthPair;
class SidePair {
    constructor(bid, ask) {
        this.bid = bid;
        this.ask = ask;
    }
    get(side) {
        if (side === length_action_side_1.Side.BID)
            return this.bid;
        else
            return this.ask;
    }
    set(side, value) {
        if (side === length_action_side_1.Side.BID)
            this.bid = value;
        else
            this.ask = value;
    }
}
exports.SidePair = SidePair;
class ActionPair {
    constructor(open, close) {
        this.open = open;
        this.close = close;
    }
    get(action) {
        if (action === length_action_side_1.Action.OPEN)
            return this.open;
        else
            return this.close;
    }
    set(action, value) {
        if (action === length_action_side_1.Action.OPEN)
            this.open = value;
        else
            this.close = value;
    }
}
exports.ActionPair = ActionPair;
//# sourceMappingURL=pair.js.map