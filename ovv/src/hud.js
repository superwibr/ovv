let loopTimestamp = Date.now(),
    tickTime = 1000
export default function hudupdate (){
    const delta = Date.now() - loopTimestamp;

    if (delta >= tickTime) {
        document.querySelector(".peerpercent").innerText = ovvinfo.peerpercent;
        loopTimestamp = Date.now();
    };
    requestAnimationFrame(hudupdate);
};