let inputNumbers = process.argv.slice(2);
inputNumbers.forEach((element, index) => {
  inputNumbers[index] = Number(element);
});
let res = inputNumbers.filter((element) => element && element > 0).sort();
if (res.length > 0) {
  for (const i of res) {
    setTimeout(() => {
      process.stdout.write("\x07");
    }, i * 1000);
  }
}
