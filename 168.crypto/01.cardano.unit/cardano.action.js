"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReadCardano = exports.READ_CARDANO = exports.UpdateCardano = exports.UPDATE_CARDANO = exports.InitCardano = exports.INIT_CARDANO = void 0;
// Cardano actions
exports.INIT_CARDANO = "[Cardano action] Init Cardano";
class InitCardano {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.INIT_CARDANO;
    }
}
exports.InitCardano = InitCardano;
exports.UPDATE_CARDANO = "[Cardano action] Update Cardano";
class UpdateCardano {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.UPDATE_CARDANO;
    }
}
exports.UpdateCardano = UpdateCardano;
exports.READ_CARDANO = "[Read action] Read Cardano";
class ReadCardano {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.READ_CARDANO;
    }
}
exports.ReadCardano = ReadCardano;
//# sourceMappingURL=cardano.action.js.map