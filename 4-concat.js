function concat() {
  let firstArg = process.argv[2] || undefined;
  let secondArg = process.argv[3] || undefined;

  console.log(`${firstArg} is ${secondArg}`);
}

concat();
