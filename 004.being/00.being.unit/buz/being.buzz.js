"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateBeing = exports.initBeing = void 0;
const ActMnu = require("../../98.menu.unit/menu.action");
const ActBee = require("../../00.being.unit/being.action");
const ActSpk = require("../../01.spark.unit/spark.action");
const ActBus = require("../../99.bus.unit/bus.action");
const ActPvt = require("../../act/pivot.action");
var bit, val, idx, dex, lst, dat, src;
const initBeing = async (cpy, bal, ste) => {
    if (bal.dat != null)
        bit = await ste.hunt(ActBus.INIT_BUS, { idx: cpy.idx, lst: [ActBee, ActSpk], dat: bal.dat, src: bal.src });
    if (bal.val == 1)
        patch(ste, ActMnu.INIT_MENU, bal);
    if (bal.slv != null)
        bal.slv({ intBit: { idx: "init-space" } });
    return cpy;
};
exports.initBeing = initBeing;
const updateBeing = async (cpy, bal, ste) => {
    bit = await ste.bus(ActPvt.UPDATE_PIVOT, { src: '004.being' });
    if (bal.slv != null)
        bal.slv({ beeBit: { idx: "update-being", dat: {} } });
    return cpy;
};
exports.updateBeing = updateBeing;
var patch = (ste, type, bale) => ste.dispatch({ type, bale });
//# sourceMappingURL=being.buzz.js.map