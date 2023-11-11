import { Action } from "../99.core/interface/action.interface";
import  ControlBit  from "./fce/control.bit";

// Control actions

export const INIT_CONTROL = "[Control action] Init Control";
export class InitControl implements Action {
 readonly type = INIT_CONTROL;
 constructor(public bale: ControlBit) {}
}

export const UPDATE_CONTROL = "[Control action] Update Control";
export class UpdateControl implements Action {
 readonly type = UPDATE_CONTROL;
 constructor(public bale: ControlBit) {}
}

export type Actions = | InitControl | UpdateControl ;
