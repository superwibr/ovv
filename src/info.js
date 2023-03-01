import { gun, peers } from "./makegun.js";

export default {
    peerpercent() {
        const connectedPeers = this.connectedPeers();
        return ((connectedPeers.length || 0) / (peers.length || 1)).toFixed(2) * 100;
    },
    connectedPeers() {
        const opt_peers = gun.back("opt.peers");
        return Object.values(opt_peers).filter((peer) => {
            return peer
                && peer.wire
                && peer.wire.readyState === 1
                && peer.wire.OPEN === 1
                && peer.wire.constructor.name === 'WebSocket';
        });
    }
};