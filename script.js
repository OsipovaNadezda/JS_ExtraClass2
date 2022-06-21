let random;
let enteredNumber;
let randomNumber;

function randomInteger(min, max) {
  random = min + Math.random() * (max - min + 1);
  return Math.floor(random);
};

const isNumber = function (num) {
  return !isNaN(parseFloat(num)) && isFinite(num);
};

function qame() {
  enteredNumber = prompt("Угадай число от 1 до 100", "Введи число от 1 до 100");
  if (enteredNumber === null) {
    alert('Игра окончена!');
    return;
  }
  if (!isNumber(enteredNumber)) {
    alert("Введи число!");
    return game();
  }

  enteredNumber = +enteredNumber;

  if (enteredNumber > randomNumber) {
    alert("Загаданное число меньше");
    return qame();
  } else if (enteredNumber < randomNumber) {
    alert("Загаданное число больше");
    return qame();
  } else if (enteredNumber === randomNumber) {
    alert("Поздравляю, Вы угадали!!!");
  }
}

randomNumber = randomInteger(1, 10);
qame();

console.log(enteredNumber);
console.log(randomNumber);