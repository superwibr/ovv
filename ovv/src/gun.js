import "https://cdn.jsdelivr.net/npm/gun/gun.js";
import "https://cdn.jsdelivr.net/npm/gun/sea.js";

const peers = [
    "https://www.raygun.live/gun",
    "https://gunmeetingserver.herokuapp.com/gun",
    "https://gun-manhattan.herokuapp.com/gun",
    "https://gun-us.herokuapp.com/gun",
    "https://gun-eu.herokuapp.com/gun",
    "https://gun-manhattan.herokuapp.com/gun",
    "https://relay.129.153.59.37.nip.io/gun",
    "https://relay.peer.ooo/gun",
    "https://peer.wallie.io/gun",
]
const gun = Gun({ peers, localStorage: true });
const ovv = gun.get("ovv")

window.gun = gun;

export { gun, ovv, peers };