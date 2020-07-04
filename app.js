
const buttons = document.querySelectorAll('.btn');
const screen = document.querySelector('.screen');
console.log(screen);

buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    console.log(e.target.innerText);
  })
})