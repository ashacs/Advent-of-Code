const fs = require('fs');

const INPUT_PATH = 'input.txt';

function main() {
  const input = fs.readFileSync(INPUT_PATH, 'UTF-8');
  const inputLines = input.split('\n').map(x => parseInt(x, 10));
  return inputLines.reduce((acc, curr) => acc + curr, 0);
}

console.log(main());
