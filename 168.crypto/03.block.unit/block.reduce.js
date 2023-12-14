"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reducer = void 0;
const clone = require("clone-deep");
const Act = require("./block.action");
const block_model_1 = require("./block.model");
const Buzz = require("./block.buzzer");
function reducer(model = new block_model_1.BlockModel(), act, state) {
    switch (act.type) {
        case Act.UPDATE_BLOCK:
            return Buzz.updateBlock(clone(model), act.bale, state);
        case Act.INIT_BLOCK:
            return Buzz.initBlock(clone(model), act.bale, state);
        case Act.READ_BLOCK:
            return Buzz.readBlock(clone(model), act.bale, state);
        case Act.WRITE_BLOCK:
            return Buzz.writeBlock(clone(model), act.bale, state);
        case Act.REMOVE_BLOCK:
            return Buzz.removeBlock(clone(model), act.bale, state);
        case Act.DELETE_BLOCK:
            return Buzz.deleteBlock(clone(model), act.bale, state);
        case Act.CREATE_BLOCK:
            return Buzz.createBlock(clone(model), act.bale, state);
        default:
            return model;
    }
}
exports.reducer = reducer;
//# sourceMappingURL=block.reduce.js.map