const rem2px = rem => rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
const vertcent2px = per => per / 100 * getComputedStyle(document.documentElement).height.split("px")[0];
const horicent2px = per => per / 100 * getComputedStyle(document.documentElement).width.split("px")[0];

const createOverlay = function (barHeight) {
    const ol = document.createElement("div");
    ol.classList = "ol noselect";

    ol.addEventListener('mousedown', function (e) {
        var offsetX = e.clientX - parseInt(window.getComputedStyle(this).left);
        var offsetY = e.clientY - parseInt(window.getComputedStyle(this).top);

        if (offsetY > rem2px(barHeight)) return;

        function mouseMoveHandler(e) {
            ol.style.top = (e.clientY - offsetY) + 'px';
            ol.style.left = (e.clientX - offsetX) + 'px';
        }

        function reset() {
            window.removeEventListener('mousemove', mouseMoveHandler);
            window.removeEventListener('mouseup', reset);
        }

        window.addEventListener('mousemove', mouseMoveHandler);
        window.addEventListener('mouseup', reset);
    });

    return ol;
};

const ol = function(title, base) {
    base || (base = [0, 0]);

    const ol = createOverlay(1);

    ol.style.left = horicent2px(base[0]) + "px";
    ol.style.top = vertcent2px(base[1]) + "px";

    // create inner
    const titlebar = document.createElement("div");
    titlebar.classList = "olt";
    titlebar.style.cursor = "move"; 
    titlebar.innerText = title;

    const xbtn = document.createElement("span");
    xbtn.innerText = "X";
    xbtn.style.float = "right";
    xbtn.style.cursor = "pointer";
    xbtn.onclick = () => ol.remove();

    titlebar.append(xbtn);
    ol.append(titlebar);

    document.body.append(ol);
    return ol;
};

const note = function(text, ...args){
    const note = ol(args);
    note.insertAdjacentHTML('beforeend', `<p>${text}</p>`);
};

export {ol, note};