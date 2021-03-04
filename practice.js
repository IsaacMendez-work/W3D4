// Array practice

//// solutions: https://github.com/andrewborisov/javascript-practice/tree/master/arrays

// ----- ** ONE ** -----

// //  * Task description: Write a method that creates a new array with given values 
// // * Expected Result: (3, 'a') => ['a', 'a', 'a'] 
// //  * Task Complexity: 1 of 5 
// //   arraySize - size of array 
// //   value - value to fill 
// //   returns - new array 



// ----- ** TWO ** -----
  // // * Task description: Write a method that reverts input array 
  // // * Expected Result: [1, 2, 3] => [3, 2, 1] 
  // //* Task Complexity: 1 of 5 
   // array - Array of any elements  




// ----- ** THREE ** -----
// //  * Task description: Write a method that clears array from all unnecessary elements, like false, undefined, empty strings, zero, null 
// // * Expected Result: [0, 1, false, 2, undefined, '', 3, null] => [1, 2, 3] 
// //  * Task Complexity: 1 of 5 
// //  array - An array of any elements 


  


// ----- ** FOUR ** -----
// //  * Task description: Write a method that returns an object composed of key-value pairs. 
// //  * Expected Result: [['a', 1], ['b', 2]] => { a: 1, b: 2 } 
// //  * Task Complexity: 2 of 5 
// //   array - a deep array of pairs 



// Dom practice

// reference: https://www.theodinproject.com/courses/web-development-101/lessons/dom-manipulation

// **
// Add the following HTML code to your HTML file - don't forget to link your js!
// ----- html start here
// <!-- The DOM -->
// <body>
//   <h1>
//     THE TITLE OF YOUR WEBPAGE
//   </h1>
//   <div id="container">
//   	<div class="content">
//       This is the glorious text-content!
//     </div>
//   </div>
// </body>
// --- html end here

// // TASK: 
// Add the following elements to the container using ONLY javascript - do not add any HTML or CSS code.

// a <p> with red text that says “Hey I’m red!”
// an <h3> with blue text that says “I’m a blue h3!”
// a <div> with a black border and pink background color with the following elements inside of it:
// another <h1> that says “I’m in a div”
// a <p> that says “ME TOO!”
// Hint for this one: after creating the div with createElement, append the <h1> and <p> to it before adding it to the container.


// // reference: https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Test_your_skills:_Object-oriented_JavaScript

// If you want to learn more about OOP check out this link first: 
// (or any other resources you want for reviewing oop)
// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object-oriented_JS

// then try this exercise: 
// TASK:
// In this task we provide you with a constructor. We want you to:
    // 1) Add a new method to the Shape class's prototype, calcPerimeter(), which calculates its perimeter (the length of the shape's outer edge) and logs the result to the console.
    // 2) Create a new instance of the Shape class called square. Give it a name of square and a sideLength of 5.
    // 3. Call your calcPerimeter() method on the instance, to see whether it logs the calculation result to the browser DevTools' console as expected.
    // 4. Create a new instance of Shape called triangle, with a name of triangle and a sideLength of 3.
    // 5. Call triangle.calcPerimeter() to check that it works OK.





    // OOP practice 
// CONSTRUCTOR PROVIDED: 
// function Shape(name, sides, sideLength) {
//     this.name = name;
//     this.sides = sides;
//     this.sideLength = sideLength;
//   }
  
  // Write your code below here
      

  // // one of the group's answer: 
  function Shape(name, sides, sideLength) {
    this.name = name;
    this.sides = sides;
    this.sideLength = sideLength;
    this.perimeter;
    this.calcPerimeter = function(){
        this.perimeter = this.sides * this.sideLength;
        return this.perimeter;
    };
};
var square = new Shape("square", 4, 5);
var triangle = new Shape("triangle", 3, 5);
console.log(square);
console.log(triangle);