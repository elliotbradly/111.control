"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reducer = void 0;
const clone = require("clone-deep");
const Act = require("./crypto.action");
const crypto_model_1 = require("./crypto.model");
const Buzz = require("./crypto.buzzer");
function reducer(model = new crypto_model_1.CryptoModel(), act, state) {
    switch (act.type) {
        case Act.UPDATE_CRYPTO:
            return Buzz.updateCrypto(clone(model), act.bale, state);
        case Act.INIT_CRYPTO:
            return Buzz.initCrypto(clone(model), act.bale, state);
        default:
            return model;
    }
}
exports.reducer = reducer;
//# sourceMappingURL=crypto.reduce.js.map