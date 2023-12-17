"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reducer = exports.list = void 0;
const control_unit_1 = require("./00.control.unit/control.unit");
const control_model_1 = require("./00.control.unit/control.model");
exports.list = [control_unit_1.default];
const reduceFromControl = require("./00.control.unit/control.reduce");
exports.reducer = {
    control: reduceFromControl.reducer,
};
class UnitData {
    constructor() {
        this.control = new control_model_1.ControlModel();
    }
}
exports.default = UnitData;
//# sourceMappingURL=BEE.js.map
