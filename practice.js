// -------------------------------
// // ** ONE
/** 
  * Task description: Write a method that creates a new array with given values 
  * Expected Result: (3, 'a') => ['a', 'a', 'a'] 
  * Task Complexity: 1 of 5 
//   arraySize - size of array 
//   value - value to fill 
//   returns - new array 
*/

// let myFunc = function(5, value){
//     new arr = [];
  // add the value to the new arr as many times as the size calls for
  // console log the array to check yourself
  // return your array
//   }
  



// -------------------------------
// // ** TWO
/** 
  * Task description: Write a method that reverts input array 
  * Expected Result: [1, 2, 3] => [3, 2, 1] 
  * Task Complexity: 1 of 5 
   array - Array of any elements  
*/

// -------------------------------
// // ** THREE
/** 
  * Task description: Write a method that clears array from all unnecessary elements, like false, undefined, empty strings, zero, null 
  * Expected Result: [0, 1, false, 2, undefined, '', 3, null] => [1, 2, 3] 
  * Task Complexity: 1 of 5 
  array - An array of any elements 
  */

  
//  let arr1 = [0, 1, false, 2, undefined, '', 3, null];
//  let arr2 = arr1.filter(item => item > 0)
//  console.log(arr2)


// -------------------------------
// // ** FOUR
/** 
  * Task description: Write a method that returns an object composed of key-value pairs. 
  * Expected Result: [['a', 1], ['b', 2]] => { a: 1, b: 2 } 
  * Task Complexity: 2 of 5 
    array - a deep array of pairs 
*/

let key = [1, 2, 3]; 
let value = [`a`, `b`, `c`,]; 
// let pair = {` \/N/`};

for(let i = 0; i < key.length; i++){ 
    pair[key[i]] = value[i];};
    
for (let keys of Object.keys(pair)) { 
    document.write(keys + " => " + obj[keys] + "</br>") 
}


// -------------------------------
// // ** FIVE