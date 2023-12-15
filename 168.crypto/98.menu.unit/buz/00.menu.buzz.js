"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createMenu = exports.closeMenu = exports.testMenu = exports.updateMenu = exports.initMenu = void 0;
const ActCyp = require("../../00.crypto.unit/crypto.action");
const ActCar = require("../../01.cardano.unit/cardano.action");
const ActBlk = require("../../03.block.unit/block.action");
const ActTrm = require("../../act/terminal.action");
const ActChc = require("../../act/choice.action");
const ActGrd = require("../../act/grid.action");
const ActCvs = require("../../act/canvas.action");
const ActCns = require("../../act/console.action");
var bit, lst, dex, idx, dat, src;
const initMenu = async (cpy, bal, ste) => {
    if (bal == null)
        bal = { idx: null };
    bit = await ste.bus(ActGrd.UPDATE_GRID, { x: 4, y: 0, xSpan: 1, ySpan: 12 });
    bit = await ste.bus(ActCvs.WRITE_CANVAS, { idx: 'cvs1', dat: { clr: Color.CYAN, net: bit.grdBit.dat }, });
    bit = await ste.bus(ActGrd.UPDATE_GRID, { x: 5, y: 0, xSpan: 6, ySpan: 12 });
    bit = await ste.bus(ActCns.WRITE_CONSOLE, { idx: 'cns00', src: "", dat: { net: bit.grdBit.dat, src: "alligaor0" } });
    bit = await ste.bus(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: "-----------" });
    bit = await ste.bus(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: "CRYPTO PIVOT V0" });
    bit = await ste.bus(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: "-----------" });
    (0, exports.updateMenu)(cpy, bal, ste);
    return cpy;
};
exports.initMenu = initMenu;
const updateMenu = async (cpy, bal, ste) => {
    //lst = [ActPvt.CLOUD_PIVOT, ActPvt.UPDATE_PIVOT, ActPvt.OPEN_PIVOT, ActPvt.EDIT_PIVOT, ActSpc.MERGE_SPACE, ActMnu.FOCUS_MENU, ActMnu.HEXMAP_MENU, , ActMnu.RENDER_MENU]
    lst = [ActBlk.WRITE_BLOCK, ActCyp.UPDATE_CRYPTO, ActCar.READ_CARDANO];
    bit = await ste.bus(ActGrd.UPDATE_GRID, { x: 0, y: 4, xSpan: 4, ySpan: 12 });
    bit = await ste.bus(ActChc.OPEN_CHOICE, { dat: { clr0: Color.BLACK, clr1: Color.YELLOW }, src: Align.VERTICAL, lst, net: bit.grdBit.dat });
    src = bit.chcBit.src;
    switch (src) {
        case ActBlk.WRITE_BLOCK:
            ste.bus(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: '------------' });
            bit = await ste.hunt(ActBlk.OPEN_BLOCK, { idx: 'blk00' });
            bit = await ste.hunt(ActBlk.WRITE_BLOCK, { idx: 'blk00' });
            if (bit == null)
                break;
            dat = bit.blkBit.dat;
            if (dat == null)
                break;
            var itm = JSON.stringify(dat);
            lst = itm.split(',');
            lst.forEach((a) => ste.bus(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: a }));
            ste.bus(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: '------------' });
            break;
        case ActCyp.UPDATE_CRYPTO:
            bit = await ste.hunt(ActCyp.UPDATE_CRYPTO, {});
            break;
        case ActCar.READ_CARDANO:
            bit = await ste.hunt(ActCar.READ_CARDANO, {});
            ste.bus(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: '------------' });
            dat = bit.crdBit.dat;
            var itm = JSON.stringify(dat);
            lst = itm.split(',');
            lst.forEach((a) => {
                ste.bus(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: a });
            });
            ste.bus(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: '------------' });
            break;
        default:
            bit = await ste.bus(ActTrm.CLOSE_TERMINAL, {});
            break;
    }
    bit = await ste.bus(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src });
    (0, exports.updateMenu)(cpy, bal, ste);
    return cpy;
};
exports.updateMenu = updateMenu;
const testMenu = async (cpy, bal, ste) => {
    return cpy;
};
exports.testMenu = testMenu;
const closeMenu = async (cpy, bal, ste) => {
    await ste.bus(ActTrm.CLOSE_TERMINAL, {});
    return cpy;
};
exports.closeMenu = closeMenu;
const createMenu = (cpy, bal, ste) => {
    debugger;
    return cpy;
};
exports.createMenu = createMenu;
var patch = (ste, type, bale) => ste.dispatch({ type, bale });
const Align = require("../../val/align");
const Color = require("../../val/console-color");
//# sourceMappingURL=00.menu.buzz.js.map