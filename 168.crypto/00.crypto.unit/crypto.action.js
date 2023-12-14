"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCrypto = exports.UPDATE_CRYPTO = exports.InitCrypto = exports.INIT_CRYPTO = void 0;
// Crypto actions
exports.INIT_CRYPTO = "[Crypto action] Init Crypto";
class InitCrypto {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.INIT_CRYPTO;
    }
}
exports.InitCrypto = InitCrypto;
exports.UPDATE_CRYPTO = "[Crypto action] Update Crypto";
class UpdateCrypto {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.UPDATE_CRYPTO;
    }
}
exports.UpdateCrypto = UpdateCrypto;
//# sourceMappingURL=crypto.action.js.map