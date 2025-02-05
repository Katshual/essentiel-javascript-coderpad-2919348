let a = 2,
  b = 3,
  result;

function addNumbers(num1 = 2, num2 = 3) {
  result = num1 + num2;
  console.log(result);
  console.log(num2);
}

addNumbers(4);
addNumbers(3, 8);
