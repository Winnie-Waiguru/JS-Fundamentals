function factorial(num) {
  let factor = 1;

  if (isNaN(num)) {
    return 1;
  }

  num = parseInt(num);

  if (num === 0 || num === 1) {
    return 1;
  }

  return num * factorial(num - 1);
}

let input = process.argv[2];
console.log(factorial(input));
