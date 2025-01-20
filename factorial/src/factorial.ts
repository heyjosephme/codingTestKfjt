// Initialize caches with base cases using arrays
const recursiveCache: bigint[] = [
  BigInt(1), // 0!
  BigInt(1), // 1!
  BigInt(2), // 2!
];

const iterativeCache: bigint[] = [
  BigInt(1), // 0!
  BigInt(1), // 1!
  BigInt(2), // 2!
];

// Validation function
const isValidPositiveInteger = (n: number): boolean => {
  return Number.isInteger(n) && n >= 0;
};

export function factorial(n: number): bigint {
  if (!isValidPositiveInteger(n)) {
    throw new Error("Input must be a non-negative integer");
  }

  // Check if value exists in cache
  if (recursiveCache[n] !== undefined) {
    return recursiveCache[n];
  }

  // Recursive calculation with BigInt and cache the result
  recursiveCache[n] = BigInt(n) * factorial(n - 1);
  return recursiveCache[n];
}

export function factorialIterative(n: number): bigint {
  if (!isValidPositiveInteger(n)) {
    throw new Error("Input must be a non-negative integer");
  }

  // Check if value exists in cache
  if (iterativeCache[n] !== undefined) {
    return iterativeCache[n];
  }

  // Calculate and cache all values up to n
  let result = iterativeCache[iterativeCache.length - 1];
  for (let i = iterativeCache.length; i <= n; i++) {
    result *= BigInt(i);
    iterativeCache[i] = result;
  }

  return result;
}
