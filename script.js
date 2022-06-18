//task 1
console.log("Задание 1");
let arr = ["12345", "234567", "345678", "45678", "56789", "456", "7890"];

for (let i = 0; i < 7; i++) {
    if (arr[i].startsWith('2') || arr[i].startsWith('4')) {
        console.log(arr[i]);
    }
}

//task2
console.log("Задание 2");
const n = 100;
for (let i = 1; i <= n; i++) {
  for (let j = 2; j <= i; j++) {
    if (i % j === 0 && j < i) {
      break;
    } else if (j === i) {
      console.log(i + ": " + "Делители этого числа: 1 и " + i);
    }
  }
}