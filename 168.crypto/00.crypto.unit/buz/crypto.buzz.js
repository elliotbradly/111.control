"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateCrypto = exports.initCrypto = void 0;
const ActCar = require("../../01.cardano.unit/cardano.action");
const ActPjc = require("../../02.project.unit/project.action");
const ActMnu = require("../../98.menu.unit/menu.action");
const ActBus = require("../../99.bus.unit/bus.action");
const ActPvt = require("../../act/pivot.action");
var bit, val, idx, dex, lst, dat, src;
const initCrypto = async (cpy, bal, ste) => {
    if (bal.dat != null)
        bit = await ste.hunt(ActBus.INIT_BUS, { idx: cpy.idx, lst: [ActCar, ActPjc], dat: bal.dat, src: bal.src });
    if (bal.val == 1)
        patch(ste, ActMnu.INIT_MENU, bal);
    if (bal.slv != null)
        bal.slv({ intBit: { idx: "init-space" } });
    return cpy;
};
exports.initCrypto = initCrypto;
const updateCrypto = async (cpy, bal, ste) => {
    bit = await ste.bus(ActPvt.UPDATE_PIVOT, { src: '168.crypto' });
    if (bal.slv != null)
        bal.slv({ cypBit: { idx: "update-crypto" } });
    return cpy;
};
exports.updateCrypto = updateCrypto;
var patch = (ste, type, bale) => ste.dispatch({ type, bale });
//# sourceMappingURL=crypto.buzz.js.map