
# **Assignment**
  * Study HOF again
  * Create your Higher-Order Function
  * Explain the settimeout function with example
  * Explain promises with examples
  * What are side effects in programming?
  * Examples of side effects in JS
  * Study classes in JavaScript  
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------


## **Higher Order Functions**

Higher order functions are functions that operate on other functions, either by taking them as arguments or by returning them.

### **Example**



```js
const visitFastFood = () => "I love to eat at fast food joints";

const makeHomeFood = () => "I love food prepared at home";

const getPreferredEatingMode = (preferredMode, eatFastFood, eatHomeFood) =>  
 preferredMode === 'fastFood' ? eatFastFood : preferredMode === 'homeFood' ? eatHomeFood: "Enter the appropriate option"

 console.log(getPreferredEatingMode('fastFood', visitFastFood(), makeHomeFood()));
 console.log(getPreferredEatingMode('homeFood', visitFastFood(), makeHomeFood()));  
 ```

## **Explain the settimeout function**



setTimeout() is a Node API that uses callback functions to schedule tasks to be performed after a delay. setTimeout() has two parameters:  

* A callback function and  
* A delay in milliseconds.

### **Example**
```js
const greetMarsians = () => console.log("Hello Marsians!-but after a while");

setTimeout(greetMarsians, 3000);
```


## **Explain Promises**



Promises are objects that represents the eventual outcome of an asynchronous operation. A promise object can be in one of three states:  


***Pending***: The initial state—the operation has not completed yet.  
***Fulfilled***: The operation has completed successfully and the promise now has a `resolved value`  
***Rejected***: The operation has failed and the promise has a` reason for` the failure. This reason is usually an `Error `of some kind.




### **Example**



```js
const snacks = {
  hamburger: true,
  meatPie: false,
  chickenPie: true,
  doughNut: false
}

const confirmOrder = (resolve, reject) => snacks.chickenPie ? resolve("chicken Pie order can be processed") : reject("chicken Pie fully sold out");

const newOrder = new Promise(confirmOrder);
console.log(newOrder) // this outputs "Promise { <state>: "fulfilled", <value>: "chicken Pie order can be processed" }"

const confirmAnotherOrder = (resolve, reject) => snacks.doughnut ? resolve("Loads of doughnut awaiting your order") : reject("Ooooops! we just sold out");

const anotherOrder = new Promise(confirmAnotherOrder);
console.log(anotherOrder); // this outputs "Promise { <state>: "rejected", <reason>: "Ooooops! we just sold out" }" AND an error response "Uncaught (in promise) Ooooops! we just sold out". The promise object uses its `then()` and `catch()` methods to link the settled promise to a handler...
```
## **What are side effects in programming**



In its pure state, the main effect of a function is to return a value to the operation invoking it (100% achievable in an ideal world I guess `:)` ). But when a function modifies or mutate a state variable value outside the confine of its local environment or scope, then that function is said to have a side effect.

### **Example**



```js
const fruits = ["Apple", "Orange", "Pinapple", "Banana", "Mango", "grape"];

let myFavoriteFruits = [];
const getFavoriteFrufits = () => {
  myFavoriteFruits = myFavoriteFruits.push(fruits.splice(1, 3));
  console.log(myFavoriteFruits);
}

console.log(getFavoriteFrufits());

console.log(fruits) // Like carbon to ozone layer, the getFavoriteFruits funtion has depleted the fruit array length from 6 to 3 on a large scale mutation.
