"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Positions = void 0;
const position_1 = require("./position");
var Positions;
(function (Positions) {
    class Static {
        constructor(H) {
            this.H = H;
            this.Position = new position_1.Position.Static(this.H);
        }
        capture(positions) {
            return {
                position: this.Position.capture(positions.position),
                closable: this.Position.capture(positions.closable),
                time: positions.time,
            };
        }
        restore(snapshot) {
            return {
                position: this.Position.restore(snapshot.position),
                closable: this.Position.restore(snapshot.closable),
                time: snapshot.time,
            };
        }
        copy(positions) {
            return {
                position: this.Position.copy(positions.position),
                closable: this.Position.copy(positions.closable),
                time: positions.time,
            };
        }
    }
    Positions.Static = Static;
})(Positions = exports.Positions || (exports.Positions = {}));
//# sourceMappingURL=positions.js.map