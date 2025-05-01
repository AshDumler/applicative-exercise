/**
 * SPACE DATA EXERCISE 18
 * Return the year with the greatest number of Asteroids discoveries
 * Return example: 1902
 */

export function getGreatestDiscoveryYear(data) {
  // Your code goes here...
  // feel free to import your `maxBy` or `minBy` methods from previous lessons
  let count = {};
  let maxNum = 0;
  let mostFound;

  const allYears = data.asteroids.map(ast => ast.discoveryYear);

  for (const year of allYears) {
    count[year] = (count[year] || 0) + 1;

    if (count[year] > maxNum) {
      maxNum = count[year];
      mostFound = year;
    }
  }
  return mostFound;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-18"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
