"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClosableStatic = exports.Closable = void 0;
const length_action_side_1 = require("./length-action-side");
class Closable {
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
    set(length, position) {
        if (length === length_action_side_1.Length.LONG)
            this.long = position;
        else
            this.short = position;
    }
}
exports.Closable = Closable;
class ClosableStatic {
    constructor(H) {
        this.H = H;
    }
    capture(closable) {
        return {
            long: this.H.capture(closable.get(length_action_side_1.Length.LONG)),
            short: this.H.capture(closable.get(length_action_side_1.Length.SHORT)),
        };
    }
    restore(snapshot) {
        return new Closable(this.H.restore(snapshot.long), this.H.restore(snapshot.short));
    }
    copy(closable) {
        return new Closable(closable.get(length_action_side_1.Length.LONG), closable.get(length_action_side_1.Length.SHORT));
    }
}
exports.ClosableStatic = ClosableStatic;
//# sourceMappingURL=closable.js.map