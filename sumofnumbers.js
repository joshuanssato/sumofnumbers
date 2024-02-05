const testNums = [1, 2, 3, 4];

function sumFor(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}

// Using a while-loop
function sumWhile(numbers) {
  let sum = 0;
  let i = 0;
  while (i < numbers.length) {
    sum += numbers[i];
    i++;
  }
  return sum;
}

// Using recursion
function sumRecursion(numbers, index = 0) {
  if (index >= numbers.length) {
    return 0;
  }
  return numbers[index] + sumRecursion(numbers, index + 1);
}
function sumTheSimpleWay(numbers) {
  return _.reduce(numbers, function (memo, num) {
    return memo + num;
  }, 0);
}

console.log(sumFor(testNums));
console.log(sumWhile(testNums));
console.log(sumRecursion(testNums));
console.log(sumTheSimpleWay(testNums));
