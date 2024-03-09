const images = [
  "images/image-1.png",
  "images/image-2.png",
  "images/image-3.png",
  "images/image-4.png",
  "images/image-4.png",
  "images/image-5.png",
  "images/image-6.png"
];




const diceImg = document.getElementById('dice-img');
const result = document.getElementById('result');
function onClick() {
    const diceRoll = Math.floor(Math.random() * 6) + 1;
    diceImg.src = images[diceRoll];
    result.textContent = `you rolled ${diceRoll}`;
}
