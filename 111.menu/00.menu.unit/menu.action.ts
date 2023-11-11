import { Action } from "../99.core/interface/action.interface";
import  MenuBit  from "./fce/menu.bit";


export const INIT_MENU = "[Menu action] Init Menu";
export class InitMenu implements Action {
 readonly type = INIT_MENU;
 constructor(public bale: MenuBit) {}
}

export const UPDATE_MENU = "[Menu action] Update Menu";
export class UpdateMenu implements Action {
 readonly type = UPDATE_MENU;
 constructor(public bale: MenuBit) {}
}

export const OPEN_MENU = "[Open action] Open Menu";
 export class OpenMenu implements Action {
 readonly type = OPEN_MENU;
 constructor(public bale: MenuBit) {}
 }
 
export const RUN_MENU = "[Run action] Run Menu";
 export class RunMenu implements Action {
 readonly type = RUN_MENU;
 constructor(public bale: MenuBit) {}
 }
 
export const EDIT_MENU = "[Edit action] Edit Menu";
 export class EditMenu implements Action {
 readonly type = EDIT_MENU;
 constructor(public bale: MenuBit) {}
 }
 
export const PATCH_MENU = "[Patch action] Patch Menu";
 export class PatchMenu implements Action {
 readonly type = PATCH_MENU;
 constructor(public bale: MenuBit) {}
 }
 
export type Actions = | InitMenu | UpdateMenu 
| OpenMenu
| RunMenu
| EditMenu
| PatchMenu

