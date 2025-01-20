import { factorial } from "../factorial";

describe("Factorial Function", () => {
  // Basic cases
  describe("Basic cases", () => {
    const basicCases = [
      { n: 1, expected: "1" },
      { n: 2, expected: "2" },
      { n: 3, expected: "6" },
    ];

    test.each(basicCases)("factorial($n) = $expected", ({ n, expected }) => {
      expect(factorial(n).toString()).toBe(expected);
    });
  });

  // Error cases
  describe("Error handling", () => {
    test("throws error for negative number", () => {
      expect(() => factorial(-5)).toThrow(
        "Input must be a non-negative integer"
      );
    });

    test("throws error for non-integer", () => {
      expect(() => factorial(3.5)).toThrow(
        "Input must be a non-negative integer"
      );
    });
  });

  // Performance tests
  describe("Performance tests", () => {
    const measurePerformance = (n: number): number => {
      const start = performance.now();
      factorial(n);
      return performance.now() - start;
    };

    test("small number (n=10)", () => {
      const expected = "3628800";
      const time = measurePerformance(10);
      expect(factorial(10).toString()).toBe(expected);
      console.log(`n=10 took ${time.toFixed(2)}ms`);
    });

    test("medium number (n=100)", () => {
      const time = measurePerformance(100);
      console.log(`n=100 took ${time.toFixed(2)}ms`);
      // Just verify it returns a BigInt, not checking exact value
      expect(typeof factorial(100)).toBe("bigint");
    });

    test("large number (n=1000)", () => {
      // Set timeout to 10 seconds as this might take longer
      jest.setTimeout(10000);

      const time = measurePerformance(1000);
      console.log(`n=1000 took ${time.toFixed(2)}ms`);
      expect(typeof factorial(1000)).toBe("bigint");
    });

    test("much larger number (n=10000)", () => {
      // Set timeout to 10 seconds as this might take longer
      jest.setTimeout(10000);

      const time = measurePerformance(10000);
      console.log(`n=10000 took ${time.toFixed(2)}ms`);
      expect(typeof factorial(10000)).toBe("bigint");
    });

    // Testing for system limits (stack overflow or memory)
    test("find system limits", () => {
      jest.setTimeout(30000); // Extended timeout for this test

      let n = 10000;
      const step = 1000;
      let lastSuccessful = 0;

      while (true) {
        try {
          factorial(n);
          console.log(`✓ n=${n} succeeded`);
          lastSuccessful = n;
          n += step;
        } catch (e) {
          if (e instanceof RangeError) {
            const errorType = e.message.includes("stack")
              ? "Stack overflow"
              : "Out of memory";
            console.log(`✗ ${errorType} error at n=${n}`);
            console.log(`Maximum successful n was ${lastSuccessful}`);
            console.log(`Error message: ${e.message}`);
            break;
          }
          throw e; // Rethrow if it's not a RangeError
        }
      }

      // Ensure we found a limit
      expect(lastSuccessful).toBeGreaterThan(0);
    });

    // Cache effectiveness test
    test("cache improves performance on subsequent calls", () => {
      // First call
      const firstCallTime = measurePerformance(100);

      // Second call (should be faster due to cache)
      const secondCallTime = measurePerformance(100);

      console.log(`First call (n=100) took ${firstCallTime.toFixed(2)}ms`);
      console.log(`Second call (n=100) took ${secondCallTime.toFixed(2)}ms`);

      expect(secondCallTime).toBeLessThan(firstCallTime);
    });
  });
});
