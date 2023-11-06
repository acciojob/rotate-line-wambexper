//your JS code here. If required.
const line = document.getElementById('line');
let angle = 0;

function rotateLine() {
    angle = (angle + 2) % 360;
    line.style.transform = `rotate(${angle}deg)`;
    setTimeout(rotateLine, 20);
}

rotateLine();