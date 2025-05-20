function loveC() {
  const input = parseInt(process.argv[2]);

  if (isNaN(input)) {
    console.log("Missing number of occurrences");
    return;
  }

  if (input <= 0) {
    return;
  }

  while (input > 0) {
    console.log("C is fun");
    input--;
  }
}

loveC();
