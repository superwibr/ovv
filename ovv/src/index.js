import { gun, ovv, peers } from "./gun.js";
import hudupdate from "./hud.js";

// gettening things we need
const messageset = ovv.get("debugmessages")

// setup the info object
window.ovvinfo = {
    get peerpercent() {
        const connectedPeers = this.connectedPeers()
        return (connectedPeers.length / peers.length).toFixed(2) * 100;
    },
    connectedPeers(){
        const opt_peers = gun.back("opt.peers");
        return Object.values(opt_peers).filter((peer) => {
            return  peer
                && peer.wire
                && peer.wire.readyState === 1
                && peer.wire.OPEN === 1
                && peer.wire.constructor.name === 'WebSocket';
        });
    },

    // debug messages
    listenDebug(){
        messageset.map(msg => console.log(msg));
    },
    msgDebug(msg){
        messageset.set(msg);
    }
};

// start updating HUD
hudupdate();