const fs = require('fs');

const INPUT_PATH = 'input.txt';

function findRepeatedFrequency(frequencyChanges) {
  let index = 0;
  let currentFrequency = 0;
  const frequencies = new Set();
  while (index < frequencyChanges.length) {
    currentFrequency += frequencyChanges[index];
    if (frequencies.has(currentFrequency)) {
      return currentFrequency;
    }
    frequencies.add(currentFrequency);

    // increment the index, and if at end of list of frequency
    // changes then cycle back to the beginning
    index += 1;
    if (index === frequencyChanges.length) {
      index = 0;
    }
  }
}

function main() {
  const input = fs.readFileSync(INPUT_PATH, 'UTF-8');
  const inputLines = input.split('\n').map(x => parseInt(x, 10));

  return findRepeatedFrequency(inputLines);
}

console.log(main());
