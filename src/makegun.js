import "https://cdn.jsdelivr.net/npm/gun/gun.min.js";
import "https://cdn.jsdelivr.net/npm/gun/lib/unset.js";
import "https://cdn.jsdelivr.net/npm/gun/sea.js";
import "https://cdn.jsdelivr.net/npm/gun/lib/radix.js";
import "https://cdn.jsdelivr.net/npm/gun/lib/radisk.js";
import "https://cdn.jsdelivr.net/npm/gun/lib/store.js";
import "https://cdn.jsdelivr.net/npm/gun/lib/rindexed.js";

const peers = [ // superpeers
    "https://gun-manhattan.herokuapp.com/gun",
    "https://relay.129.153.59.37.nip.io/gun",
    "https://relay.peer.ooo/gun",
    "https://peer.wallie.io/gun",
];
const gun = Gun({ peers, localStorage: false });
const ovv = gun.get("ovv");

window.gun = gun;

export { gun, ovv, peers };