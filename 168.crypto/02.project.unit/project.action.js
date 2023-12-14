"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListProject = exports.LIST_PROJECT = exports.UpdateProject = exports.UPDATE_PROJECT = exports.InitProject = exports.INIT_PROJECT = void 0;
// Project actions
exports.INIT_PROJECT = "[Project action] Init Project";
class InitProject {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.INIT_PROJECT;
    }
}
exports.InitProject = InitProject;
exports.UPDATE_PROJECT = "[Project action] Update Project";
class UpdateProject {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.UPDATE_PROJECT;
    }
}
exports.UpdateProject = UpdateProject;
exports.LIST_PROJECT = "[List action] List Project";
class ListProject {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.LIST_PROJECT;
    }
}
exports.ListProject = ListProject;
//# sourceMappingURL=project.action.js.map