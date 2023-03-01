import hudupdate from "./hud.js";
import info from "./info.js";
import mediator from "./mediator/mediator.js";
import {ol, note} from "./ol.js";

window.ovv = {
    info, mediator, ol
};
ovv.ol.note = note;

// start updating HUD
hudupdate();

export default ovv;