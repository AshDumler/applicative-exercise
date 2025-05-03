import { data } from "../data/data";

// SPACE DATA EXERCISE 13
// Return the average temperature of all the Planets
// Return example: 132.53

export function getAveragePlanetsTemperature(data) {
  // Your code goes here...
  let tempsSum = data.planets
    .filter((planet) => {
      return planet.avgTemp;
    })
    .reduce((acc, val, index, array) => {
      const total = acc.sum + val.avgTemp;
      return {
        sum: total,
        arr: array,
      };
    }, {sum: 0, arr:[]});
let tempAvg = tempsSum.sum / tempsSum.arr.length;
return tempAvg;
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-13"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
