function loveC() {
  let input = parseInt(process.argv[2]);

  if (isNaN(input)) {
    console.log("Missing number of occurrences");
    return;
  }

  if (input <= 0) {
    return;
  }

  let count = input;
  while (count > 0) {
    console.log("C is fun");
    count--;
  }
}

loveC();
