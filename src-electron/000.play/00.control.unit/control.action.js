"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestControl = exports.TEST_CONTROL = exports.CreateControl = exports.CREATE_CONTROL = exports.OpenControl = exports.OPEN_CONTROL = exports.UpdateControl = exports.UPDATE_CONTROL = exports.InitControl = exports.INIT_CONTROL = void 0;
// Control actions
exports.INIT_CONTROL = "[Control action] Init Control";
class InitControl {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.INIT_CONTROL;
    }
}
exports.InitControl = InitControl;
exports.UPDATE_CONTROL = "[Control action] Update Control";
class UpdateControl {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.UPDATE_CONTROL;
    }
}
exports.UpdateControl = UpdateControl;
exports.OPEN_CONTROL = "[Open action] Open Control";
class OpenControl {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.OPEN_CONTROL;
    }
}
exports.OpenControl = OpenControl;
exports.CREATE_CONTROL = "[Create action] Create Control";
class CreateControl {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.CREATE_CONTROL;
    }
}
exports.CreateControl = CreateControl;
exports.TEST_CONTROL = "[Test action] Test Control";
class TestControl {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.TEST_CONTROL;
    }
}
exports.TestControl = TestControl;
//# sourceMappingURL=control.action.js.map