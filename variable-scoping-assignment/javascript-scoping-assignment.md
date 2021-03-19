
Explain variable scoping with examples  
Explain with/in objects  
…  conditionals  
… functions  

# **Variable Scoping**  
Variable scope in JavaScript refers to the current context or location of the variable declaration, which determines where it can be accessed from.   

The two types of scope are:    

1. Global Scope also known as root scope
2. Local Scope also known as block scope

## **Global Scope**
 A variable is in the global scope if it is defined outside of a code block or function. global scope variables can be accessed from any part of the program.

## **Local Scope**
Variables declared within a function are in the local scope. Variables in the local scope are only accessible within the function in which they are defined, i.e they are bound to their respective functions each having different scopes. 

### **Example using function**

//Global variable accessible to function scope  
const favoriteColor = "red";  

const renderColor = () => {  
	console.log(favoriteColor);  
}  

renderColor(); // outputs red  

 //Locally declared variable not accessible globally  
const renderColor = () => {  
	const favoriteColor = "red";  
}  

console.log(favoriteColor);// Outputs undefined  



### **Example using an object**
//function declared in an object are not accessible in the usual way  
const person = {  
	  name: "Brief Taylor",  
	  age: 35,  
	  showDetails: function() {  
		  const details = `My name is ${this.name}, I am ${age} years old.`  
		  console.log(details);  
	}  
}  

showDetails(); // Outputs undefined.

### **Example using if statement**

const greet = "Hello";  

if (greet) {  
   console.log(greet);  
} // outputs Hello   