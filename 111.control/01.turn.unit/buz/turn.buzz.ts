
import * as ActMnu from "../../98.menu.unit/menu.action";

import * as ActTrn from "../../01.turn.unit/turn.action";

import * as ActCol from "../../97.collect.unit/collect.action";
import * as ActBus from "../../99.bus.unit/bus.action";

import * as ActVrt from "../../act/vurt.action"
import * as ActDsk from "../../act/disk.action"
import * as ActPvt from "../../act/pivot.action";

import * as ActCrd from "../../act/cardano.action";
import * as ActBlk from "../../act/block.action";

var bit, val, idx, dex, lst, dat, src;

export const initTurn = async (cpy: TurnModel, bal: TurnBit, ste: State) => {


  bal.slv({ intBit: { idx: "init-turn" } });

  return cpy;
};

export const updateTurn = async (cpy: TurnModel, bal: TurnBit, ste: State) => {


  bit = await ste.bus(ActBlk.WRITE_BLOCK, { idx: 'blk00' })

  bal.slv({ trnBit: { idx: "update-turn", dat:bit } });

  return cpy;
};



export const openTurn = async (cpy: TurnModel, bal:TurnBit, ste: State) => {


  debugger
  bit = await ste.bus(ActBlk.OPEN_BLOCK, { idx: 'blk00' })
  debugger

  bal.slv({ trnBit: { idx: "open-turn", dat:bit } });

  return cpy;
  };



import { TurnModel } from "../turn.model";
import TurnBit from "../fce/turn.bit";
import State from "../../99.core/state";
