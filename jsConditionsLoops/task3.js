const number = 3;

//цикл for
console.log("Таблиця множення (for):");

for (let i = 1; i <= 10; i++) {
  console.log(`${number} x ${i} = ${number * i}`);
}

//цикл while
console.log("Таблиця множення (while):");

let j = 1;
while (j <= 10) {
  console.log(`${number} x ${j} = ${number * j}`);
  j++;
}
