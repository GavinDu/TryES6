const readFileAsArray = require('./promiseTest');

async function countOdd() {
  try {
    const lines = await readFileAsArray('./streamTest.js');
    const numbers = lines.map(Number);
    const oddCount = numbers.filter(n => n%2 == 1).length;
    console.log(`Odd numbers count: ${oddCount}`);
  } catch (err) {
    console.error(err);
  }
}

countOdd();