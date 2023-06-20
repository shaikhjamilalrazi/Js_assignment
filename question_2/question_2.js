// 2.Math Object:
// a. Write a JavaScript function that takes an array of numbers as input and returns the square root of the sum of squares of all the numbers. Use the Math object to perform the necessary calculations.

// b. Implement the function to display the square root of the sum of squares for an array of numbers.

function sqrtOfSumOfSquares(numbers) {
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        total += numbers[i] * numbers[i];
    }
    return Math.sqrt(total);
}

const numbers = [1, 2, 3, 4, 5];
const sqrtOfSumOfSquares = sqrtOfSumOfSquares(numbers);
console.log(sqrtOfSumOfSquares); // 7.071067811865475
