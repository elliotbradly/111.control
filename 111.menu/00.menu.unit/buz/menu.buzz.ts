import * as ActMnu from "../../98.menu.unit/menu.action";
import * as ActBus from "../../99.bus.unit/bus.action";

import * as ActMnu from "../menu.action";

import * as ActVrt from "../../act/vurt.action";
import * as ActDsk from "../../act/disk.action";

var bit, val, idx, dex, lst, dat;

export const initMenu = async (cpy: MenuModel, bal: MenuBit, ste: State) => {

 if (bal.dat != null) bit = await ste.hunt(ActBus.INIT_BUS, { idx: cpy.idx, lst: [ActMnu], dat: bal.dat, src: bal.src })

 if (bal.val == 1) patch(ste, ActMnu.INIT_MENU, bal);


 if (bal.slv != null) bal.slv({ intBit: { idx: "init-menu" } });

 return cpy;
};

export const updateMenu = (cpy: MenuModel, bal: MenuBit, ste: State) => {

 const { exec } = require('child_process');

 exec('tsc -b 111.menu', async (err, stdout, stderr) => {
 if (err) {
 console.error(`exec error: ${err}`);
 }

 process.chdir("../999.vurt");
 bit = await ste.bus(ActVrt.BUNDLE_VURT, { src: "111.menu" });
 process.chdir("../111.menu");

 bit = await ste.bus(ActDsk.READ_DISK, { src: './work/111.menu.js' })
 var menu = bit.dskBit.dat;

 bit = await ste.bus(ActDsk.WRITE_DISK, { src: '../gillisse/public/jsx/111.menu.js', dat: menu })

 bit = await ste.bus(ActDsk.READ_DISK, { src: './index.html' })
 var html = bit.dskBit.dat;

 bit = await ste.bus(ActDsk.READ_DISK, { src: './index.js' })
 var index = bit.dskBit.dat;

 bit = await ste.bus(ActDsk.WRITE_DISK, { src: '../gillisse/public/jsx/index.js', dat: index })
 bit = await ste.bus(ActDsk.WRITE_DISK, { src: '../gillisse/index.html', dat: html })

 setTimeout(() => {
 if (bal.slv != null) bal.slv({ mnuBit: { idx: "update-menu" } });
 }, 3);

 });

 return cpy;
};


export const openMenu = async (cpy: MenuModel, bal: MenuBit, ste: State) => {

 bit = await ste.bus(ActDsk.COPY_DISK, { src: './vue', idx: '../gillisse/src' })

 bit = await ste.hunt(ActMnu.RUN_MENU, {})

 const open = require('open')

 var loc = './vrt.opn.bat'
 bit = await open(loc)

 setTimeout(() => {
 if (bal.slv != null) bal.slv({ mnuBit: { idx: "open-menu" } });
 }, 33)


 return cpy;
};
export const runMenu = async (cpy: MenuModel, bal: MenuBit, ste: State) => {

 const open = require('open')

 var loc = './vrt.gil.bat'
 bit = await open(loc)

 setTimeout(() => {
 if (bal.slv != null) bal.slv({ mnuBit: { idx: "run-menu" } });
 })

 return cpy;
};
export const editMenu = (cpy: MenuModel, bal: MenuBit, ste: State) => {

 const { exec } = require('child_process');

 process.chdir("../../studio/");

 exec('start Code.exe ../packages/gillisse', async (err, stdout, stderr) => {
 if (err) {
 console.error(`exec error: ${err}`);
 }

 process.chdir("../packages/111.menu");

 if (bal.slv != null) bal.slv({ mnuBit: { idx: "edit-menu", dat: {} } });
 });

 return cpy;
};


var patch = (ste, type, bale) => ste.dispatch({ type, bale });

export const patchMenu = (cpy: MenuModel, bal:MenuBit, ste: State) => {
 debugger
 return cpy;
 };

import { MenuModel } from "../menu.model";
import MenuBit from "../fce/menu.bit";
import State from "../../99.core/state";

