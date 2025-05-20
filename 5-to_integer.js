function anInteger() {
  let input = parseInt(process.argv[2]);

  if (isNaN(input)) {
    console.log("Not a number");
    return;
  }
  console.log(`My number: ${input}`);
}

anInteger();
