//your JS code here. If required.
 
const line = document.getElementById('line');
let rotation = 0;
 
setInterval(() => {
  rotation += 5;
  line.style.transform = `translate(-50%, -50%) rotate(${rotation}deg)`;
}, 50);