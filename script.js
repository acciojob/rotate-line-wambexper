const line = document.getElementById("line");
let rotationAngle = 0;

function rotateLine() {
    rotationAngle += 2;
    line.style.transform = `rotate(${rotationAngle}deg)`;
}

setInterval(rotateLine, 20);
