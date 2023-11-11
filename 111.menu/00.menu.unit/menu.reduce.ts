import * as clone from "clone-deep";
import * as Act from "./menu.action";
import { MenuModel } from "./menu.model";
import * as Buzz from "./menu.buzzer";
import State from "../99.core/state";

export function reducer(model: MenuModel = new MenuModel(), act: Act.Actions,  state?: State ) {
 switch (act.type) {
 
 case Act.UPDATE_MENU:
 return Buzz.updateMenu(clone(model), act.bale, state);

 case Act.INIT_MENU:
 return Buzz.initMenu(clone(model), act.bale, state);

case Act.OPEN_MENU:
 return Buzz.openMenu(clone(model), act.bale, state);
 
case Act.RUN_MENU:
 return Buzz.runMenu(clone(model), act.bale, state);
 
case Act.EDIT_MENU:
 return Buzz.editMenu(clone(model), act.bale, state);
 
case Act.PATCH_MENU:
 return Buzz.patchMenu(clone(model), act.bale, state);
 
 default:
 return model;
 }
}



