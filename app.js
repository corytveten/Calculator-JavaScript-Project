
const symbols = document.querySelectorAll('.btn-yellow');
const screen = document.querySelector('.screen');
const clear = document.querySelector('.btn-clear');
const equal = document.querySelector('btn-equal');
const numbers = document.querySelectorAll('.btn-grey')
console.log(numbers);

clear.addEventListener('click', () => {
  screen.value = "";
})
numbers.forEach((number) => {
  number.addEventListener('click', (e) => {
    console.log(e.target.innerText);
    const data = e.target.innerText;
    screen.value = screen.value + data;
  })
})

symbols.forEach((symbol) => {
  symbol.addEventListener('click', (e) => {
    const operator = e.target.innerText;
    if (screen.value !== "") {
      screen.value = screen.value + operator;
    }
  })
})