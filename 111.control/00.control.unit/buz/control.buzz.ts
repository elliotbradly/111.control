import * as ActMnu from "../../98.menu.unit/menu.action";


import * as ActCtr from "../../00.control.unit/control.action";

import * as ActCol from "../../97.collect.unit/collect.action";
import * as ActBus from "../../99.bus.unit/bus.action";

import * as ActVrt from "../../act/vurt.action"
import * as ActDsk from "../../act/disk.action"

var bit, val, idx, dex, lst, dat, src;

export const initControl = async (cpy: ControlModel, bal: ControlBit, ste: State) => {

  if (bal.dat != null) bit = await ste.hunt(ActBus.INIT_BUS, { idx: cpy.idx, lst: [ActCtr], dat: bal.dat, src: bal.src })

  if (bal.val == 1) patch(ste, ActMnu.INIT_MENU, bal);
  if (bal.slv != null) bal.slv({ intBit: { idx: "init-space" } });

  return cpy;
};

export const updateControl = (cpy: ControlModel, bal: ControlBit, ste: State) => {

  const { exec } = require('child_process');

  exec('quasar dev -m electron', async (err, stdout, stderr) => {

    if (bal.slv != null) bal.slv({ condBit: { idx: "update-control", dat: {} } });

  })

  return cpy;
};

var patch = (ste, type, bale) => ste.dispatch({ type, bale });

import { ControlModel } from "../control.model";
import ControlBit from "../fce/control.bit";
import State from "../../99.core/state";
