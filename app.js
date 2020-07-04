
const symbols = document.querySelectorAll('.btn-yellow');
const screen = document.querySelector('.screen');
const clear = document.querySelector('.btn-clear');
const equal = document.querySelector('btn-equal');
const numbers = document.querySelectorAll('.btn-grey')


function doMath(value) {
    console.log(screen.value);
    const all = screen.value.split(" ");
    const firstPart = parseFloat(all[0]);
    const op = all[1];
    const secondPart = parseFloat(all[2]);
    console.log(all)
    switch(op) {
      case '+':
        result = firstPart + secondPart;
        screen.value = result;
        break;
      case '-':
        result = firstPart - secondPart;
        screen.value = result;
        break;
      case '*':
        result = firstPart * secondPart;
        screen.value = result;
        break;
      case '/':
        result = firstPart / secondPart;
        screen.value = result;
        break;
      default:

      break;
    }
};

clear.addEventListener('click', () => {
  screen.value = "";
})

numbers.forEach((number) => {
  number.addEventListener('click', (e) => {
    console.log(e.target.innerText);
    const data = e.target.innerText;
    if (data !== "=" && data !== "C") {
    screen.value = screen.value + data;
    }
  })
})

symbols.forEach((symbol) => {
  symbol.addEventListener('click', (e) => {
    const operator = e.target.innerText;
    if (screen.value !== "") {
      screen.value = screen.value + " " + operator + " ";
    }
  })
})

numbers[11].addEventListener('click', () => {
  if (screen.value !=="") {
    doMath(screen.value);
  }
})