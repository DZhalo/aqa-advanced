//function declaration
function calculateAreaDec(width, height) {
  return width * height;
}

console.log(calculateAreaDec(5, 10));


//function expression
const calculateAreaExp = function (width, height) {
  return width * height;
};

console.log(calculateAreaExp(3, 4));


//arrow function
const calculateAreaArr = (width, height) => {
  return width * height;
};

console.log(calculateAreaArr(8, 11));
