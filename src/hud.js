import ovv_ from "./index.js";

let loopTimestamp = Date.now(),
    tickTime = 1000;
export default function hudupdate() {
    const delta = Date.now() - loopTimestamp;

    if (delta >= tickTime) {
        document.querySelector(".peerpercent").innerText = ovv_.info.peerpercent();
        loopTimestamp = Date.now();
    };
    requestAnimationFrame(hudupdate);
};