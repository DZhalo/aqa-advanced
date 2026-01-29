function handleEven() {
  console.log("Number is even");
}

function handleOdd() {
  console.log("Number is odd");
}

function handleNum(num, onEven, onOdd) {
  if (num % 2 === 0) {
    onEven();
  } else {
    onOdd();
  }
}

handleNum(2, handleEven, handleOdd);
