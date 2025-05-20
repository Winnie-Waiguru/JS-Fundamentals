function square() {
  const input = parseInt(process.argv[2]);

  if (isNaN(input)) {
    console.log("Missing size");
  } else if (input <= 0) {
    console.log("");
  } else {
    const row = "X".repeat(input);
    for (let index = 0; index < input; index++) {
      console.log(row);
    }
  }
}

square();
