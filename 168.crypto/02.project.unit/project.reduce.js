"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reducer = void 0;
const clone = require("clone-deep");
const Act = require("./project.action");
const project_model_1 = require("./project.model");
const Buzz = require("./project.buzzer");
function reducer(model = new project_model_1.ProjectModel(), act, state) {
    switch (act.type) {
        case Act.UPDATE_PROJECT:
            return Buzz.updateProject(clone(model), act.bale, state);
        case Act.INIT_PROJECT:
            return Buzz.initProject(clone(model), act.bale, state);
        case Act.LIST_PROJECT:
            return Buzz.listProject(clone(model), act.bale, state);
        default:
            return model;
    }
}
exports.reducer = reducer;
//# sourceMappingURL=project.reduce.js.map