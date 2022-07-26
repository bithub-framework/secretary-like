"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HStatic = exports.H = void 0;
var H;
(function (H) {
    let RoundingMode;
    (function (RoundingMode) {
        RoundingMode[RoundingMode["TOWARDS_ZERO"] = 0] = "TOWARDS_ZERO";
        RoundingMode[RoundingMode["AWAY_FROM_ZERO"] = 1] = "AWAY_FROM_ZERO";
        RoundingMode[RoundingMode["HALF_AWAY_FROM_ZERO"] = 2] = "HALF_AWAY_FROM_ZERO";
    })(RoundingMode = H.RoundingMode || (H.RoundingMode = {}));
})(H = exports.H || (exports.H = {}));
class HStatic {
    capture(x) {
        return x.toJSON();
    }
    max(x, ...rest) {
        return [x, ...rest].reduce((x, y) => x.gt(y) ? x : y);
    }
    min(x, ...rest) {
        return [x, ...rest].reduce((x, y) => x.lt(y) ? x : y);
    }
}
exports.HStatic = HStatic;
//# sourceMappingURL=h.js.map