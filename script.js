
// ^^^^^^^^^^CHAPTER 4^^^^^^^^^^^^^

//Declare a function with 3 parameters
const computeSimpleMath = (firstNum, secondNum, myString) => { 
  if(myString === "multiply" || myString === "Multiply") { //condition and case sensitivity check
    return firstNum * secondNum;
  } else if(myString === "divide" || myString === "Divide") {
    return firstNum / secondNum
  } else if(myString === "sum" || myString === "Sum") {
    return firstNum + secondNum // sum of first and second numbers
  } else { // if non of the values of myString above is entered 
    return " Error!: Input either 'multiply', or 'divide' or 'sum'"
  }
}
//Invoke function with arguments and log to the console
console.log(computeSimpleMath(20, 5, "sum"));



// // ^^^^^^^^^^CHAPTER 3^^^^^^^^^^^^^


// //  CONDITIONAL STATEMENTS AND LOGIC
// // if else statements
// const age = 5; //data type number
// const myInput = "5"; // data type string

// if(age == myInput) {  //the condition in parenthesis with lineant equality sign
//   console.log("They are equal"); //if condition is true
// } else {
//   console.log("They are not equal"); // if condition is false
// }

// //To test strict equality

// if(age === myInput) { // strict equality sign
//   console.log("They are equal"); // if true
// } else {
//   console.log("They are not equal"); // if false
// }

// // if... else if statement(This allows us chain multiple conditions)

// if(certain condition) {
//   console.log("something") // if condition is true
// } else if(another condition) {
//   console.log("another thing")
// } else if(yet another condition) {
//   console.log("yet another thing")
// } else {
//   console.log("This thing rather") //if non of the above conditions evaluates to true
// }



// //ARRAYS AND ARRAY METHODS
// // Declare an array with 5 items
// var fruits = ["Pineapple", "Orange", "Mango", "Apple","Banana"];
// console.log(fruits);

// // Arrays are zero indexed, to access the 4th item in the fruits array, do This
// fruits[3];
// // Array can hold any data type

// // var mixedArray = [5,"How are you", true, "nature"];

// //ARRAY METHODS
// //Push to add to the end
// fruits.push("Pear");

// // Pop to remove an item from the beginning of fruits array
// fruits.pop();

// // Splice to remove any item from inside the fruit array

// fruits.splice(3, 1); //parameters are position and number of items

// // Slice to copy fruit array or extract some items from fruit to form another array

// fruits.slice();

// // Unshift to add an item to the beginning of fruits array
// fruits.unshift("Blackbery");

// // shift to remove an item from the beginning of fruits array
// fruits.shift();


// // Reverse to add an item to the beginning of fruits array
// fruits.reverse();

// // Join to convert an array into string

// var myNewString = fruits.join(", ");
// console.log(myNewString);


