// ## Challenge 1: Sum of Odd Numbers

// Level: Easy
// Write a function sumOfOddNumbers(n) that takes a positive integer n and returns the sum of the first n odd numbers.

// ```javascript
function sumOfOddNumbers(n) {
	// Your code here
	let sum = 0;
	let oddNumber = 1;

	for (let i = 0; i < n; i++) {
		sum += oddNumber;
		oddNumber += 2; 
	}

	return sum;
}

console.log(sumOfOddNumbers(5)); // Output: 25 (1 + 3 + 5 + 7 + 9)
// ```

// ## Challenge 2: Reverse Digits

// Level: Intermediate
// Write a function reverseDigits(num) that takes a positive integer num and returns the number with its digits reversed.

// javascript
function reverseDigits(num) {
	// Your code here
	let string = num.toString();
	let newString = '';
	for (let i = string.length - 1; i >= 0; i--) {
		newString += string[i];
	}
	return +newString;
}
console.log(reverseDigits(1552345)); // Output: 5432551

// ## Challenge 3: Multiplication Table

// Level: Easy
// Write a function multiplicationTable(n, m) that prints the multiplication table of n up to m.

// ```javascript
function multiplicationTable(n, m) {
	// Your code here
	for (i = 0; i <= m; i++) {
		console.log(`${n} x ${i} = ${n * i}`);
	}
}

multiplicationTable(3, 5);
// // Output:
// // 3 x 1 = 3
// // 3 x 2 = 6
// // 3 x 3 = 9
// // 3 x 4 = 12
// // 3 x 5 = 15
// ```

// ## Challenge 4: Smallest Divisor

// Level: Intermediate
// Write a function smallestDivisor(num) that takes an integer num greater than 1 and returns the smallest divisor of num other than 1.

// ```javascript
function smallestDivisor(num) {
	// Your code here
	let smallest = 0;
	for (let i = 2; i <= num; i++) {
		if (num % i === 0) {
			return smallest = i;
			// break;
		}
	}
	// return smallest;
}

console.log(smallestDivisor(15)); // Output: 3
console.log(smallestDivisor(17)); // Output: 17 (Prime number)
// ```

// ## Challenge 5: Check If a Number is Prime

// Level: Intermediate

// Write a function isPrime(num) that takes a positive integer num and returns true if it is a prime number and false otherwise. Use a loop to check divisibility.

// Example:
// num =7 → true (7 is only divisible by 1 and itself).
// num =10 → false (10 is divisible by 1, 2, 5, and 10).

// ```javascript
function isPrime(num) {
	// Your code here
	let counter = 0;
	if (num === 1) {
		return false;
	}
	for (let i = 0; i <= num; i++) {
		if (num % i === 0) {
			counter++;
		}
	}
	return counter <= 2 ? true : false;
}

console.log(isPrime(7)); // Output: true
console.log(isPrime(13)); // Output: false
console.log(isPrime(2)); // Output: true
console.log(isPrime(1)); // Output: false
// ```
