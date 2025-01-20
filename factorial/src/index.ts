import { factorial, factorialIterative } from "./factorial";

// Test different values
const testValues = [0, 1, 5, 10, 20];

console.log("Testing recursive factorial with memoization:");
testValues.forEach((n) => {
  console.log(`${n}! = ${factorial(n)}`);
});

console.log("\nTesting iterative factorial:");
testValues.forEach((n) => {
  console.log(`${n}! = ${factorialIterative(n)}`);
});
