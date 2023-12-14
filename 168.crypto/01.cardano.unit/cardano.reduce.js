"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reducer = void 0;
const clone = require("clone-deep");
const Act = require("./cardano.action");
const cardano_model_1 = require("./cardano.model");
const Buzz = require("./cardano.buzzer");
function reducer(model = new cardano_model_1.CardanoModel(), act, state) {
    switch (act.type) {
        case Act.UPDATE_CARDANO:
            return Buzz.updateCardano(clone(model), act.bale, state);
        case Act.INIT_CARDANO:
            return Buzz.initCardano(clone(model), act.bale, state);
        case Act.READ_CARDANO:
            return Buzz.readCardano(clone(model), act.bale, state);
        default:
            return model;
    }
}
exports.reducer = reducer;
//# sourceMappingURL=cardano.reduce.js.map