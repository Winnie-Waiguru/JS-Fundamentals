function checkArguments() {
  let input = process.argv.slice(2);
  let inputLength = input.length;

  if (inputLength === 0) {
    console.log("No argument");
  } else if (inputLength === 1) {
    console.log("Argument found");
  } else {
    console.log("Arguments found");
  }
}

checkArguments();
