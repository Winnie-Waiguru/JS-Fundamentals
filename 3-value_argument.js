function valueArgument() {
  let firstArg = process.argv[2];

  if (firstArg == undefined) {
    console.log("No argument");
    return;
  }
  console.log(firstArg);
}

valueArgument();
