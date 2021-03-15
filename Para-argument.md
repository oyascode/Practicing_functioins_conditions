
# DIfference between function parameter and argument

## **Parameter**  

The parameter is a kind of variable passed to a function when it is declared, which acts as a placeholder that is used to access function input data (argument).

### **Example**

function calculateArea(length, breadth) {  
  const area = (length * breadth);  
  return area;  
}

The length and breadth in parenthesis above are the parameters.

## **Argument**  

The argument is the actual value passed to a function when the function is called.

## **Example**  

Call the function in the example above and pass in 2 arguments  

calculateArea(5, 4);  
5 and 4 are the argument passed to the function.


# **What is Concatenation** 

Concatenation is the operation of joining two or more data types end to end.
Below are a few ways you can carry out conccatenation.

### **Concatenate using the '+' operator**  

This can be used to join any set of data type  
const bestFriend = "Surge Anderson";  
const age = 30;  

const myInfo = 'My best friend\'s name is ' + bestFriend + ' and he is ' + age + ' years old';

console.log(myInfo);  

### **Concatenate using the '+=' operator**  

This can used to join a string to a variable.

let firstPhrase = 'I am here ';  
firstPhrase += 'just for you!';  

console.log(firstPhrase);  

### **Concatenate using the back ticks ` `**  

This is the most flexible way to Concatenate  

const bestFriend = "Surge Anderson";  
const age = 30;  

const concatInfo = `My best friend's name is ${bestFriend} and he is ${age} years old`;
