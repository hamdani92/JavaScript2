function doubleOddNumbers(numbers) {
  const newNumbers = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 !== 0) {
      newNumbers.push(numbers[i] * 2);
    }
  }
  return newNumbers;
}

const myNumbers = [1, 2, 3, 4];
console.log(doubleOddNumbers(myNumbers)); // ==> [2, 6]

// Rewrite the above doubleOddNumbers function using map and filter; don't forget to use =>
const myOddNumbers = myNumbers.filter(myNumber => myNumber % 2 !== 0).map(myNumber => myNumber * 2);
console.log(myOddNumbers);
// Do not change or remove anything below this line
module.exports = {
  myNumbers,
  doubleOddNumbers
};
