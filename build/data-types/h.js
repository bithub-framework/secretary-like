"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HLike = void 0;
/**
 * typeclass
 * @typeParam H - type
 */
class HLike {
}
exports.HLike = HLike;
/**
 * namespace about {@link HLike}
 */
(function (HLike) {
    let RoundingMode;
    (function (RoundingMode) {
        RoundingMode[RoundingMode["TOWARDS_ZERO"] = 0] = "TOWARDS_ZERO";
        RoundingMode[RoundingMode["AWAY_FROM_ZERO"] = 1] = "AWAY_FROM_ZERO";
        RoundingMode[RoundingMode["HALF_AWAY_FROM_ZERO"] = 2] = "HALF_AWAY_FROM_ZERO";
    })(RoundingMode = HLike.RoundingMode || (HLike.RoundingMode = {}));
})(HLike = exports.HLike || (exports.HLike = {}));
//# sourceMappingURL=h.js.map