
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


// Corrected version of the function assignment...Always follow the instruction to the letter!!

//Declare a function with 3 parameters
const computeSimpleMath = (firstNum, secondNum, myString) => { 
  if(myString === "multiply" || myString === "Multiply") { //condition and case sensitivity check
    const outcome = (firstNum * secondNum); //store the result in a outcome variable
    return outcome;
  } 
  
  if(myString === "divide" || myString === "Divide") {
    const outcome = (firstNum / secondNum); //store the result in a outcome variable
    return outcome;
  }
  
  if(myString === "sum" || myString === "Sum") {
    const outcome = (firstNum + secondNum); //store the result in a outcome variable
    return outcome;
  } 
}
//Invoke function with arguments and log to the console
console.log(computeSimpleMath(20, 5, "sum"));
console.log(computeSimpleMath(20, 5, "multiply"));
