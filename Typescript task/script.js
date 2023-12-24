let clickCount = 0;
let colorIndex = 0;
const colors = ['red', 'green', 'blue'];

function buttonClick() {
  clickCount++;
  document.getElementById('clickCount').innerText = clickCount;
  changeButtonColor();
}

function changeButtonColor() {
  const button = document.getElementById('clickButton');
  button.style.backgroundColor = colors[colorIndex];
  colorIndex = (colorIndex + 1) % colors.length;
}
