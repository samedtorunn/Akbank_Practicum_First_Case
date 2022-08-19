
/**
 * This program includes a function that takes a number as a parameter, and returns if the total value of its digits is odd or even.
 * 2022.08_Akbank Web3 Practicum_Javascript_Odd or Even_First Case Catalog
 * @author: Samed Torun
 * 
 */

function oddishOrEvenish(inputNumber) {
  
  let inputAsString = inputNumber.toString(10);
  
  let inputNumberLength = inputAsString.length;
  
  let total = 0;
  
  for (let i = 0; i<inputNumberLength; i++) {
    total += parseInt(inputAsString[i]);
  }
  
  if (total % 2 == 0) {
    return "Even";
    
  } else {
    return "Odd";
  }

}

console.log(oddishOrEvenish(777));


