"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateBlock = exports.CREATE_BLOCK = exports.DeleteBlock = exports.DELETE_BLOCK = exports.RemoveBlock = exports.REMOVE_BLOCK = exports.WriteBlock = exports.WRITE_BLOCK = exports.ReadBlock = exports.READ_BLOCK = exports.UpdateBlock = exports.UPDATE_BLOCK = exports.InitBlock = exports.INIT_BLOCK = void 0;
// Block actions
exports.INIT_BLOCK = "[Block action] Init Block";
class InitBlock {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.INIT_BLOCK;
    }
}
exports.InitBlock = InitBlock;
exports.UPDATE_BLOCK = "[Block action] Update Block";
class UpdateBlock {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.UPDATE_BLOCK;
    }
}
exports.UpdateBlock = UpdateBlock;
exports.READ_BLOCK = "[Read action] Read Block";
class ReadBlock {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.READ_BLOCK;
    }
}
exports.ReadBlock = ReadBlock;
exports.WRITE_BLOCK = "[Write action] Write Block";
class WriteBlock {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.WRITE_BLOCK;
    }
}
exports.WriteBlock = WriteBlock;
exports.REMOVE_BLOCK = "[Remove action] Remove Block";
class RemoveBlock {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.REMOVE_BLOCK;
    }
}
exports.RemoveBlock = RemoveBlock;
exports.DELETE_BLOCK = "[Delete action] Delete Block";
class DeleteBlock {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.DELETE_BLOCK;
    }
}
exports.DeleteBlock = DeleteBlock;
exports.CREATE_BLOCK = "[Create action] Create Block";
class CreateBlock {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.CREATE_BLOCK;
    }
}
exports.CreateBlock = CreateBlock;
//# sourceMappingURL=block.action.js.map