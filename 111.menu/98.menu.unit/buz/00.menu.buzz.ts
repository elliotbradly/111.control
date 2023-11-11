import * as ActMnu from "../menu.action";
import * as ActMnu from "../../00.menu.unit/menu.action";
import * as ActVrt from "../../act/vurt.action"

import * as ActTrm from "../../act/terminal.action";

var bit, lst, dex

export const initMenu = async (cpy: MenuModel, bal: MenuBit, ste: State) => {

 if (bal == null) bal = { idx: null }

 bit = await ste.bus(ActTrm.INIT_TERMINAL, {})

 updateMenu(cpy, bal, ste);

 return cpy;
};

export const updateMenu = async (cpy: MenuModel, bal: MenuBit, ste: State) => {

 bit = await ste.bus(ActTrm.WRITE_TERMINAL, { src: "-----------", bit: 'local' })

 bit = await ste.bus(ActTrm.WRITE_TERMINAL, { src: "MENU PIVOT V0", bit: 'local' })
 bit = await ste.bus(ActTrm.WRITE_TERMINAL, { src: "-----------", bit: "local" })

 var lst = [ ActMnu.UPDATE_MENU, ActMnu.OPEN_MENU, ActMnu.EDIT_MENU ]

 bit = await ste.bus(ActTrm.UPDATE_TERMINAL, { lst })

 bit = bit.trmBit;
 var idx = lst[bit.val];

 switch (idx) {


 case ActMnu.OPEN_MENU:
 bit = await ste.hunt(ActMnu.OPEN_MENU, {})
 break;


 case ActMnu.UPDATE_MENU:
 bit = await ste.hunt( ActMnu.UPDATE_MENU, {})
 break;


 case ActMnu.EDIT_MENU:

 bit = await ste.hunt( ActMnu.EDIT_MENU, {})
 bit = await ste.bus(ActTrm.WRITE_TERMINAL, { src: "PATCHING...", bit: 'local' })
 bit = await ste.bus(ActTrm.WRITE_TERMINAL, { src: "-----------", bit: "local" })

 lst = [ActMnu.PATCH_MENU]

 bit = await ste.bus(ActTrm.UPDATE_TERMINAL, { lst })

 bit = await ste.hunt( ActMnu.PATCH_MENU, {})

 break;

 default:
 bit = await await ste.bus(ActTrm.CLOSE_TERMINAL, {})
 break;
 }

 updateMenu(cpy, bal, ste);

 return cpy;
};

export const testMenu = async (cpy: MenuModel, bal: MenuBit, ste: State) => {
 return cpy;
};

export const closeMenu = async (cpy: MenuModel, bal: MenuBit, ste: State) => {

 await ste.bus(ActTrm.CLOSE_TERMINAL, {})

 return cpy;
};

export const shadeMenu = async (cpy: MenuModel, bal: MenuBit, ste: State) => {


 return cpy;
};


var patch = (ste, type, bale) => ste.dispatch({ type, bale });


export const visageMenu = (cpy: MenuModel, bal: MenuBit, ste: State) => {
 debugger
 return cpy;
};
import { MenuModel } from "../menu.model";
import MenuBit from "../fce/menu.bit";
import State from "../../99.core/state";
