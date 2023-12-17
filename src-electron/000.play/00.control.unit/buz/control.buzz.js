"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.testControl = exports.createControl = exports.openControl = exports.updateControl = exports.initControl = void 0;
const ActCtr = require("../../00.control.unit/control.action");
const ActDsk = require("../../act/disk.action");
const ActPvt = require("../../act/pivot.action");
const ActCrd = require("../../act/cardano.action");

var bit, val, idx, dex, lst, dat, src;

const initControl = async (cpy, bal, ste) => {
  if (bal.dat != null)
    bit = await ste.hunt(ActBus.INIT_BUS, { idx: cpy.idx, lst: [ActCtr], dat: bal.dat, src: bal.src });
  if (bal.val == 1)
    patch(ste, ActMnu.INIT_MENU, bal);

    debugger
  //bit = await ste.hunt(ActTrn.INIT_TURN, {});
  if (bal.slv != null)
    bal.slv({ intBit: { idx: "init-control" } });
  return cpy;
};
exports.initControl = initControl;


const updateControl = async (cpy, bal, ste) => {
  const { exec } = require('child_process');
  exec('tsc -b 111.control', async (err, stdout, stderr) => {
    if (err) {
      console.error(`exec error: ${err}`);
    }
    bit = await ste.bus(ActPvt.BUNDLE_PIVOT, { src: "111.control" });
    bit = await ste.bus(ActDsk.READ_DISK, { src: './work/111.control.js' });
    var shade = bit.dskBit.dat;
    bit = await ste.bus(ActDsk.WRITE_DISK, { src: './public/jsx/111.control.js', dat: shade });
    setTimeout(() => {
      if (bal.slv != null)
        bal.slv({ ctlBit: { idx: "update-control" } });
    }, 3);
  });
  return cpy;
};
exports.updateControl = updateControl;


const openControl = (cpy, bal, ste) => {
  const { exec } = require('child_process');
  exec('npx quasar dev -m electron', async (err, stdout, stderr) => {
    if (bal.slv != null)
      bal.slv({ condBit: { idx: "open-control", dat: {} } });
  });
  return cpy;
};
exports.openControl = openControl;


const createControl = (cpy, bal, ste) => {
  const { exec } = require('child_process');
  exec('npx quasar build', async (err, stdout, stderr) => {
    if (bal.slv != null)
      bal.slv({ condBit: { idx: "create-control", dat: {} } });
  });
  return cpy;
};
exports.createControl = createControl;

const testControl = async (cpy, bal, ste) => {
  bit = await ste.bus(ActCrd.READ_CARDANO, {});
  if (bal.slv != null)
    bal.slv({ condBit: { idx: "test-control", dat: {} } });
  return cpy;
};
exports.testControl = testControl;
var patch = (ste, type, bale) => ste.dispatch({ type, bale });
//# sourceMappingURL=control.buzz.js.map
